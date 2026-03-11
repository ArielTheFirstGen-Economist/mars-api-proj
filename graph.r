### In this project we will call an API and turn the data into a graph


library(jsonlite)
library(dplyr)
library(ggplot2)
library(lubridate)
library(plotly)
library(hrbrthemes)
library(htmlwidgets)


## Call the API and check the data

apiUrl <- "https://api.sampleapis.com/bitcoin/historical_prices" 

bitCoinData <- fromJSON(apiUrl)

View(bitCoinData)

# Transform the data type from char to date to make sure the graph can be displayed properly

trans_data <- bitCoinData %>%
  mutate(Date = mdy(Date)) %>%
  group_by(Date) %>%
  summarise(Price = mean(Price))

# 3. Draw the graph!

p <- ggplot(data = trans_data, 
       aes(x = Date, y = Price)) +
  geom_line(color = "#69b3a2") +            # Draws a blue line chart
  geom_area(fill="#69b3a2", alpha=0.5) +
  ylab("bitcoin price ($)") +
  xlab("year") +
  theme_classic()                      
  labs(title = "Bitcoin Price History")  # Adds a title to the top
  
 # Turns the graph into an interactive graph
bit <- ggplotly(p)

bit

# save the graph as an HMTL widget to add it to your webpage. 

saveWidget(bit, file="~/ariel-lara-projects/open-API-pro/mars-api-proj/plot-area-chart.html")
