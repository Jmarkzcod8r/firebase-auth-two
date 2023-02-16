# import os
# import webbrowser

# os.environ["MY_VAR"] = "my_value"

# webbrowser.open("https://alsonspowergrp.sumtotal.host/rcore/c/continuousfeedback/dashboard?relyingParty=ELIXHRUI&nodeKey=self_continuousreview&nodeUrl=%2Fcontinuousfeedback%2Fdashboard")




from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize a webdriver instance
driver = webdriver.Firefox()

# Navigate to the desired website
driver.get("https://alsonspowergrp.sumtotal.host/rcore/c/continuousfeedback/dashboard?relyingParty=ELIXHRUI&nodeKey=self_continuousreview&nodeUrl=%2Fcontinuousfeedback%2Fdashboard")

# Find the button element using its Xpath
button = driver.find_element(By.XPATH, "//button[@id='cfd_ProvideFeedbackBtn']")
# //*[@id="cfd_ProvideFeedbackBtn"]
# Click the button
button.click()