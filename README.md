![dev/mission logo](docs/images/dev-mission-logo-cropped.png)

**CREATING THE NEXT GENERATION OF TECH TALENT**

# Intro to Programming

## Final Project

We will divide everyone into two different groups to build different parts of the class directory. We will all share the Glitch project and Airtable base (request edit access to the project in Glitch and Airtable as needed).

Team 1 will be responsible for designing and creating the banner/top area and the cards. The team will also be responsible for deciding the color scheme and fonts used for the entire site. Team 1 should coordinate with Team 2 to make sure the color scheme of the site and the card’s design combines well with the card’s content/data.

Team 2 will be responsible for deciding what data will be included and writing the JavaScript code to fetch the data. They will also be responsible for collecting the headshots. Team 2 will also be responsible for inputting all data and headshots into Airtable. Team 2 will also be responsible to create the search bar that can filter the card’s by student names (if this design is chosen by Team 1).

### Past project examples

|                                                       |                                                                |                                                                      |                                                                   |
| ----------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [Cohort 11](https://directory-js.glitch.me/)          | [Cohort 12](https://class-directory-spr2021.glitch.me/)        | [Cohort 13](https://devmission-summer-2021-13.glitch.me/)            | [Cohort 14](https://devmission-summer-2021-14.glitch.me/)         |
| [Cohort 15](https://dm-fall2021-cohort15.glitch.me/)  | [Cohort 16](https://devmission-spring-2022-cohort.glitch.me/)  | [Cohort 17](https://devmission-summer2022-cohort17.glitch.me/)       | [Cohort 18](https://devmission-fall2022.glitch.me/)               |
| [Cohort 19](https://dm-spring23-directory.glitch.me/) | [Cohort 20](https://dm-summer23-directory.glitch.me/)          | [Cohort 21](https://dm-summer23-cohort21.glitch.me/)                 | [Cohort 22](https://dm-fall23-directory.glitch.me/)               |
| [Cohort 23](https://class-directory.glitch.me/)       | [Cohort 24](https://dm-spring24-cohort24.glitch.me/index.html) | [Cohort 25](https://dm-spring24-cohort25-class-directory.glitch.me/) | [Cohort 26](https://dm-summer-2024-cohort26.glitch.me/index.html) |

## ClassDirectoryTemplate

The purpose of this project is to give a working example of using the HTML `<template>` tag to replace repeated blocks of HTML.

Here, we are using the project for [Cohort 23](https://class-directory.glitch.me/) as the base, and refactoring the HTML using the template tag.

There are 2 repeated HTML blocks:

- students
- testimonials

Then we are adding a javascript file **template.js** to duplicate the HTML blocks. After the blocks are cloned and added to the target elements on the page, the specific content for each student or testimonial are added to the DOM elements.
