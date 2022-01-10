Ateşman Readability Script
---
Evaluates text readability score based on Ender Ateşman turkish readability formula:

> Readability Score is calculated as 198.825-40.175×(total syllables/total
words)-2.610×(total words/total sentences).

I made some tests on the formula with different texts and gave readability ratings between 4th grade - 12th grade (based on turkish edu. sys.)

---
Based on my own review and evaluation I've included another formula in this script.
This second function takes the ateşman score as a parameter and uses a simple interpolation to detect the readability grade.

