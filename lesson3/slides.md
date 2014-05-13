![General Assembly](../assets/images/ga.png)
# FEWD LESSON 3

## FEWD - Advanced CSS

### Instructors
Kit Yuen & Mart van de Ven



## Agenda

* Box Model
* HTML Template
* Classes & Ids
* Nested Selectors
* Homework
* Version Control



## Foundational HTML + CSS
<aside class="notes">Mart ~ 5 Minutes</aside>

### Seperation of concerns.



## Box Model
<aside class="notes">Mart ~ 30 min : @FEWD_HK_4/lesson3/labs/codepen-demo</aside>

### Every element in web design is a box
![GeneralAssemb.ly](../assets/images/icons/code_along.png)

* In the HTML, all elements follow the box model.



## Box Model
<aside class="notes"></aside>

![](http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif)



##Box Model

<aside class="notes"> : @FEWD_HK_4/lesson3/labs/box-model</aside>

**Width** = content width + padding-left + padding-right + border-left + border-right

**Height** = content height + padding-top + padding-bottom + border-top + border-bottom



## HTML Template
<aside class="notes"> Kit ~ 20 min : @FEWD_HK_4/lesson3/labs/template</aside>

```
<!doctype html>
<html lang="en">
  <head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="author" content="<your name>">
    <meta name="keywords" content="<comma>, <separated>, <keywords>">
    <meta name="description" content="<A short description about this page>">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```



## Classes & Ids
<aside class="notes">Mart ~ 10 mins</aside>

### With classes and ids we can target specific elements on a page, so we can manipulate it uniquely.
```
h1 { color: red; } /* Apply to all <h1> tags */

h1.tagline { color: blue; } /* Only apply to the <h1> tag which has class = tagline */
```

* **ID** must be unique in within the same .html.
* The same **class** could be applied to more than 1 tag.



## Classes & Ids
<aside class="notes">Mart ~ 10 mins</aside>

How to __select__ classes in CSS?

```
.className { color: red; }

#idName { color: blue; }
```



## Classes & Ids
<aside class="notes">Mart ~ 5 mins</aside>

### When should i use them? id or class?

[The Difference Between ID and Class by Chris Coyier](http://css-tricks.com/the-difference-between-id-and-class/)



## Nested Selectors
<aside class="notes">Kit ~ 30 min : @FEWD_HK_4/lesson3/labs/nested-selectors</aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)

* Sometimes you need to be specific on the CSS selector



## Homework
<aside class="notes">Both</aside>

### How to get started with a project?

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

**[Preview](http://ga-students.github.io/FEWD_HK_4/lesson3/labs/fashion_blog_part1/Fashion_Blog.png)** : Fashion Blog



## Version Control
<aside class="notes">Mart ~ 60 Min</aside>

### Installation

* Linux: [Git](https://help.github.com/articles/set-up-git)
* Mac: [git-osx-installer](https://code.google.com/p/git-osx-installer/)
* Mac(Alternative):[Homebrew](http://brew.sh/), [XCode](https://developer.apple.com/xcode/)
* Windows: [GitHub on Windows](http://windows.github.com/)
* Verify the git installation in Terminal/PowerShell
  * `git --version`



## Git Concepts
<aside class="notes">
  Mart ~ 10 Min
  Provide a high-level overview of the work-flow in Git by talking about how the following items make distirbuted collaboration possible
</aside>

### The Hash
### The Branch
### The Diff
### The Merge



## Version Control
<aside class="notes">
  Help the students to fork the repository and setup the gh-pages branch
</aside>

* Sign-up with [GitHub](https://github.com/signup/free)
* `fork` the [FEWD repository](https://github.com/ga-students/FEWD_HK_5)
* Open Terminal/PowerShell and checkout the source code by
  * `git clone https://github.com/ga-students/FEWD_HK_5.git`
* [Pave the way](https://help.github.com/articles/making-changes) for your final project
* Serve your website with [GitHub Pages](https://help.github.com/articles/creating-project-pages-manually)
* [Marvel](https://github.com/) at your mastery over Git
* ... the most complicated tool built by mankind
