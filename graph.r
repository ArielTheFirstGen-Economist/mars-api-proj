library(jsonlite)
library(dplyr)
library(ggplot2)
library(lubridate)
library(plotly)
library(hrbrthemes)
library(htmlwidgets)

apiUrl <- "https://api.sampleapis.com/bitcoin/historical_prices" 

bitCoinData <- fromJSON(apiUrl)

View(bitCoinData)

trans_data <- bitCoinData %>%
  mutate(Date = mdy(Date)) %>%
  group_by(Date) %>%
  summarise(Price = mean(Price))

# 3. Draw the graph!
# We tell it to use your data, put Date on the bottom (x), and Price on the side (y)
p <- ggplot(data = trans_data, 
       aes(x = Date, y = Price)) +
  geom_line(color = "#69b3a2") +            # Draws a blue line chart
  geom_area(fill="#69b3a2", alpha=0.5) +
  ylab("bitcoin price ($)") +
  xlab("year") +
  theme_classic()                      # Makes the background look clean and modern
  labs(title = "Bitcoin Price History")  # Adds a title to the top
  
bit <- ggplotly(p)

bit

saveWidget(bit, file="~/ariel-lara-projects/open-API-pro/mars-api-proj/plot-area-chart.html")
