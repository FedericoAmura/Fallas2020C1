# Title     : Rutine Generator
# Objective : Generation of gym rutines

data <- read.csv("data.csv")
input <- commandArgs(trailingOnly = TRUE)
inputSex <- input[1]
inputGoal <- input[2]
inputWeight <- as.numeric(input[3])
inputHeight <- as.numeric(input[4])
input <- data.frame(height = inputHeight, weight = inputWeight)

data <- data[data$sex == inputSex,]
data <- data[data$goal == inputGoal,]
data <- subset(data, select = -c(sex, goal))

lmabs <- lm(abs ~ weight + height, data = data)
abs <- round(predict(lmabs, input))

lmsuperman <- lm(superman ~ weight + height, data = data)
superman <- round(predict(lmsuperman, input))

lmsquats <- lm(squats ~ weight + height, data = data)
squats <- round(predict(lmsquats, input))

lmpushups <- lm(pushups ~ weight + height, data = data)
pushups <- round(predict(lmpushups, input))

lmrun <- lm(run ~ weight + height, data = data)
run <- round(predict(lmrun, input))

lmbicycle <- lm(bicycle ~ weight + height, data = data)
bicycle <- round(predict(lmbicycle, input))

lmchestrep <- lm(chestrep ~ weight + height, data = data)
chestrep <- round(predict(lmchestrep, input))
lmchestweight <- lm(chestweight ~ weight + height, data = data)
chestweight <- round(predict(lmchestweight, input))

lmtriceprep <- lm(triceprep ~ weight + height, data = data)
triceprep <- round(predict(lmtriceprep, input))
lmtricepweight <- lm(tricepweight ~ weight + height, data = data)
tricepweight <- round(predict(lmtricepweight, input))

lmbiceprep <- lm(biceprep ~ weight + height, data = data)
biceprep <- round(predict(lmbiceprep, input))
lmbicepweight <- lm(bicepweight ~ weight + height, data = data)
bicepweight <- round(predict(lmbicepweight, input))

lmshoulderrep <- lm(shoulderrep ~ weight + height, data = data)
shoulderrep <- round(predict(lmshoulderrep, input))
lmshoulderweight <- lm(shoulderweight ~ weight + height, data = data)
shoulderweight <- round(predict(lmshoulderweight, input))

lmbackrep <- lm(backrep ~ weight + height, data = data)
backrep <- round(predict(lmbackrep, input))
lmbackweight <- lm(backweight ~ weight + height, data = data)
backweight <- round(predict(lmbackweight, input))

cat('{')
cat('"abs":', abs, ",")
cat('"superman":', superman, ",")
cat('"squats":', squats, ",")
cat('"pushups":', pushups, ",")
cat('"run":', run, ",")
cat('"bicycle":', bicycle, ",")
cat('"chestrep":', chestrep, ",")
cat('"chestweight":', chestweight, ",")
cat('"triceprep":', triceprep, ",")
cat('"tricepweight":', tricepweight, ",")
cat('"biceprep":', biceprep, ",")
cat('"bicepweight":', bicepweight, ",")
cat('"shoulderrep":', shoulderrep, ",")
cat('"shoulderweight":', shoulderweight, ",")
cat('"backrep":', backrep, ",")
cat('"backweight":', backweight)
cat('}')
