# Run openEO processes in Shiny apps

If one is new to Shiny in Python, a really good documentation can be found [**here**](https://shiny.rstudio.com/py/docs/get-started.html). This documentation is the source for all main interaction in the Shiny app built here.

As any other Shiny app, there will always be an UI and a Server side. Both can be coded in the same script, but they are quite differently set. The UI defines the interface of the application, and therefore one needs to define data inputs, buttons and tabs here. Below, one can see how the "Time Series Analyser" interface has been built. 

```python 
# Tab2 : Time Series Analyser
ui.nav("Time-Series Analyser", 
        
# This tab has both a sidebar and panel
ui.layout_sidebar(
        
    # Define Sidebar Inputs
    ui.panel_sidebar(
            
        # Bounding Box
        ui.input_numeric("w", "xmin (EPSG:4326)", 10.35, min = 0, step = .01),
        ui.input_numeric("s", "ymin (EPSG:4326)", 46.10, min = 0, step = .01),
        ui.input_numeric("e", "xmax (EPSG:4326)", 12.55, min = 0, step = .01),
        ui.input_numeric("n", "ymax (EPSG:4326)", 47.13, min = 0, step = .01),
            
        # Temporal Filter
        ui.input_date_range("date1date2", "Select timeframe", 
        start = "2019-01-01", end = "2019-12-31", 
        min = "2019-01-01", max = str(date.today()), startview =  "year", weekstart = "1"),

        # Map with bbox
        output_widget("map_ts"),
            
        # Cloud Cover 
        ui.input_numeric("cloud1", 
        "cloud cover to be considered? (0 to 1 - 0.5 is recommended)", 0.5, 
        min = 0, max = 1, step = .1),

        # Submit Button
        ui.input_action_button("data1", "Submit"),
        ui.output_text("compute")
            
        ),
        
        # Time Series Plot
        ui.panel_main(
            ui.output_plot("plot_ts")
          ),
        ),
      ),
```

Everything in the UI start with defining sidebars, tabs and everything that refers to the layout. This is what is seen by the method *ui.panel_sidebar*. In the following all inputs (data) are defined for the "Time Series Analyser". Here, the most important is to pay attention to different data types and that each and everyone of them will require a different method. In this dashboard tab, for instance, the *input_numeric*, *input_date_range* and *input_action_button* are used. The other part is then the output items. Here the leaflet interactive map (*output_widget*) and the *output_plot* are used. The last one is the one seen before. It refers to the time series plot.  

Once some idea is given on how to work with Python's Shiny UI, a lot of questions may come into the mind about how to make these inputs and outputs actually turn into some result. This is where the Server comes into play. The server is again another function, where in this case, the first output to be defined is the leaflet map. 

```python
def server(input, output, session):
    
    # Leaft Map for Time Series
    @output
    @render_widget
    def map_ts():
      center_y = (input.s() + input.n())/2
      center_x = (input.w() + input.e())/2
      m = L.Map(center=(center_y, center_x), zoom=6)
      rectangle = L.Rectangle(bounds=((input.n(), input.w()), (input.s(), input.e())))
      m.add_layer(rectangle)
      return m
```

The function here used for plotting the nice bounding box on an interactive map is *L.Rectangle()*, being L the name through the *ipyleaflet* package was imported. It is important to mentioned that a leaflet map has to be defined for each tab, as the coordinates for the bounding box are different for each tab. 

After that, the interactions from the first input start being defined. An extent is first defined for the openeo processes:

```python

@output
@render.plot
@reactive.event(input.data1) 
async def plot_ts():
    with ui.Progress(min=1, max=6) as p:
      
        # Define the Spatial Extent
        extent = {
          "type": "Polygon",
          "coordinates": [[
            [input.w(), input.n()],
            [input.e(), input.n()],
            [input.e(), input.s()],
            [input.w(), input.s()],
            [input.w(), input.n()]
            ]]
            }
      
        p.set(1, message="Local Wrangling")
        
```

The output is here defined with a *@reactive.event* tag, which allows for the inputs to be brought to the server only when the Submit button is hit. A progress bar is also defined, which helps by the fact that the whole process takes a while, and shiny does not naturally give the idea something is running without a progress bar. 

After that, the collections are loaded, including the NO2 and the Cloud Cover bands, and the processes above mentioned are run, such as the mask for cloud cover, the interpolation, and the udf. Once the job is sent to backend, the script will wait for it to complete and one can call the files into memory and the rest is standard python and *matplotlib* usage. The most relevant thing to remember here is that the specific server function one is manipulating, like here, the *def map_ts()* function, is must have a *return* call in its end, otherwise no plots will be retrieved from it, obviously enough. Below, one can see how the time series plot is defined, considering the *ts_df* as a data frame built from the JSONs read as a dictionary in python. 

```python
fig, ax = plt.subplots(figsize=(16, 12))
ts_df.plot(ax=ax)
ax.set_xlabel('Time')
ax.set_ylabel('Value')
ax.set_title('NO2 Time Series from SENTINEL 5P')
# plt.show()
        
p.set(6, message="Done")
      
return fig 
```

As in a dashboard, one will probably work with rendering plots mainly, that should be resourceful enough to let anyone start playing with openEO and Shiny in python together. If there are any doubts, do not hesitate to reach the developers and consider even creating an issue in this repository. Please be aware of openEO backend related issues that do not concern this dashboard developers. 