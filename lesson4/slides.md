![General Assembly](../assets/images/ga.png)
# FEWD LESSON 4

## FEWD - Layout

### Instructors
Kit Yuen & Mart van de Ven



## Agenda

* More on Git
* Box Model Hack
* Advanced CSS Selectors
* CSS Specificity
* Floats
* HTML5 Structural Elements
* Lab Time



## Getting help in GitHub
<aside class="notes"></aside>
[Example](https://github.com/cindyyen/FEWD_HK_3/commit/6d12cdf9a541f250deadf8684e4b1d9dacb15b25)

* Use @references to call `tijptjik` or `ykyuen` to the scene!



## GIT made EASY with SUBLIME
<aside class="notes"></aside>



### Getting latest course files from Instructors
<aside class="notes">Kit ~ 5 Minutes</aside>

## Add the upstream repository

1. Open up the Command Pallete
> `CMD + SHIFT + P`
  >> `git custom command`
1. In the bottom input box, enter the following line
> `remote add upstream https://github.com/ga-students/FEWD_HK_5.git`



### Getting latest course files from Instructors
<aside class="notes"></aside>

## Verify upstream repository

1. Open up the Command Pallete
> `CMD + SHIFT + P`
  >> `git custom command`
1. In the bottom input box, enter the following line
> `remote -v`



### Getting latest course files from Instructors
<aside class="notes">Mart ~ 5 Minutes</aside>

1. Before each command, open up the Command Pallete
> `CMD + SHIFT + P`
1. Now to pull from our `ga-students` upstream repo
> `git custom command`
  >> `pull upstream gh-pages`
1. Now we want to push to our own `origin` repository
> `git push`

That should be all! Check GH to check whether it worked



## Staging your changes for commit
<aside class="notes">Mart ~ 5 Minutes</aside>



<aside class="notes">Mart ~ 5 Minutes</aside>

1. Check that there is nothing unexpected in the _staging area_
> git diff staging

1. If unwanted files are in staging you should open them in sublime and
> git unstage (current file)

1. Check that you are adding the correct code changes
> git diff all

1. If correct, then you need to _add your changed files to the staging area_
> git add [current file/all/add...]

You've now put those changes _on stage_. You'v put a spotlight on them for the 'commit` command to see them.You can continue to code and make changes, adding them as you go along, but usually you'll want to now commit those changes.



### Your staged changes are now ready to be commited, shared with the world
<aside class="notes">Mart ~ 5 Minutes</aside>
1.  As you instruct to sublime to commit to git ...
> git commit

1. ... a message prompt at the bottom asking for a short summary of the changes
> `<enter message>`

1. You've now made a commit, so feel free to push your changes and continue!
> git push

That should be all! Check GH to check whether it worked



## Box Model Hack
<aside class="notes">Kit ~ 10 min  : @FEWD_HK_5/lesson4/labs/codepen-boxmodelhack</aside>

```
/* Box Model Hack */
* {
     -moz-box-sizing: border-box; /* Firexfox */
     -webkit-box-sizing: border-box; /* Safari/Chrome/iOS/Android */
     box-sizing: border-box; /* IE */
}
```



## Advanced CSS Selector
<aside class="notes">Kit ~ 15 min</aside>

[The 30 CSS Selectors you Must Memorize](http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/)



## CSS Specificity
<aside class="notes">Mart ~ 15 min</aside>

[Specifics on CSS Specificity](http://css-tricks.com/specifics-on-css-specificity/)



## Floats
<aside class="notes">Kit ~ 20 min</aside>

Float is a CSS positioning property, used to layout a web page.
![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)



## Characteristics of Floats
<aside class="notes">Kit ~ 20 min</aside>

Text flows around floated boxes, but other boxes in flow [completely ignore them](http://jsbin.com/azuwul/1/edit)



## Floats
<aside class="notes"></aside>

Float can also help you to create an horizontal menu.
![](http://line25.com/wp-content/uploads/2012/css-menu/3.jpg)




## Code Along
<aside class="notes">
  Both ~ 60 mins : @FEWD_HK_5/lesson4/labs/codepen-nav_menu
    * HTML: header, aside, footer
    * CSS: float
</aside>

### Navigation menu
![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## HTML5 Structural Elements
<aside class="notes">Mart ~ 10 mins</aside>

* ```<header>```
* ```<aside>```
* ```<footer>```



## Code Along
<aside class="notes">
  Both ~ 60 mins : @FEWD_HK_5/lesson4/labs/codepen-layout-example
    * HTML: header, aside, footer
    * CSS: float
</aside>

### Floating Sections
![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## The clearfix hack
<aside class="notes">Mart ~ 10 mins : @FEWD_HK_5/lesson4/labs/codepen-clearfix</aside>

Apply the clearfix class to the parent element such that it knows the height of the floating children.

```css
/* Clear fix hack */
.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
```



## Homework
<aside class="notes">Both ~ 10 + 45 min</aside>

### How to get started with a project?

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)
### Fashion Blog Part 2

### Reading

* [All about Floats](http://css-tricks.com/all-about-floats/)
* [Floats: Things you should know](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/)