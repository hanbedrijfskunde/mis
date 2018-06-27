library(hexSticker)
library(tidyverse)


p <- ggplot(data.frame(x = c(-4, 6)), aes(x)) + 
  mapply(function(mean, sd, col) {
    stat_function(fun = dnorm, args = list(mean = mean, sd = sd), col = col)
  }, 
  # enter means, standard deviations and colors here
  mean = c(-1, 1, 3), 
  sd = c(1, .6, 0.8), 
  col = c('#013F73', '#f0882f', '#688b2e')
  )

p <- p + theme_void() + theme_transparent()

sticker(p, package="InfoCap", p_color = "black", p_size=8, s_x=1, s_y=.75, s_width=1,
        s_height=.8, filename="logo.png", h_fill="#F9E79F",
        h_color="#E74C3C", spotlight=TRUE)

