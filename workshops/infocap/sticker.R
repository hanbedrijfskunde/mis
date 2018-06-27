library(hexSticker)
allData <- read.csv("data/datasets/DatasaurusDozen-wide.tsv", sep = "\t", stringsAsFactors = FALSE)[-1,]
allData <- data.frame(sapply(allData, as.numeric))

dnPlot <- select(allData, dino, dino.1)

sticker(expression(plot(dnPlot, cex=.5, cex.axis=0.4, xlab="", ylab="", pch = 18, col = "gold")),
        package="DataStories", p_size=8, s_x=1, s_y=.8, s_width=1.2, s_height=1,
        h_fill="#f9690e", h_color="#f39c12",
        filename="logo.png")
