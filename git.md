## Setup

### Install the Git binary

Install the version of git specific to your Operating System. On Windows and OSX they will suggest installing the native GitHub app, but for now avoid it and follow the rest of the guide instead. There are some collapsed helper sections on these pages, so be sure to expand them if you are stuck on something.

* [Windows](http://git-scm.com/download/win)
* [OSX](https://code.google.com/p/git-osx-installer/)
**Troubleshooting**
	* **Q** *I can't install from an unknown source*
	* **A** Right-click --> Open with Installer App
* [Linux](http://git-scm.com/download/linux)

### Github Setup

First, [signup](https://github.com/join) for Github, but don't follow the steps suggested after 'Go Celabrate'. Now, follow the guides for your Operation System. Password caching is optional.

* [Windows](https://help.github.com/articles/set-up-git#platform-windows)
* [OSX](https://help.github.com/articles/set-up-git#platform-mac)
* [Linux](https://help.github.com/articles/set-up-git#platform-linux)

Config Git for the future. Paste this anywhere into your terminal.

`git config --global push.default simple`

### Authentication

Generate SSH Keys and add them to GitHub. It's easy to miss out the step where you need to manually _add the keys to Github_. This **isn't** optional.

* [Windows](https://help.github.com/articles/generating-ssh-keys#platform-windows)
* [OSX](https://help.github.com/articles/generating-ssh-keys#platform-mac)
* [Linux](https://help.github.com/articles/generating-ssh-keys#platform-linux)

## Setup Course Materials

### Fork the course repository

Visit the General Assembly [repository for this class](https://github.com/ga-students/FEWD_HK_5), click `Fork` in the top right corner to create your own 'linked copy' at your GitHub account. The GA repo is hosted at `github.com/ga-students/FEWD_HK_5` you should now have `https://github.com/yourname/FEWD_HK_5`.

Click the little wrench icon on the right sidebar to go to settings. Click collaborators. You should be at `https://github.com/yourname/FEWD_HK_5/settings/collaboration`.

1. Add your instructor(s) `tijptjik', and `ykyuen` to the project.
1. Follow your instructor by clicking [Follow](https://github.com/tijptjik/) // [Follow](https://github.com/ykyuen/)on their github profile. This way you'll be in the loop on their new projects and code changes.

### Local Repo

You can get a local (i.e. on your machine) copy of the course files by `cloning` the repository to your local machine.

1. Open a terminal
1. [Navigate](http://linuxcommand.org/lts0020.php) to the directory where you want to save your course files
1. On the GitHub page featuring your copy of the course files, i.e. `https://github.com/yourname/FEWD_HK_5` there is a box on the right wih the `HTTPS clone URL`, select `SSH` instead. It will take the form of `git@github.com:yourname/FEWD_HK_5.git`. Copy it to your clipboard.
1. back in the terminal, paste it after the `git clone ` command, so the full command will look like
```bash
git clone git@github.com:yourname/FEWD_HK_5.git`
```
1. You now have a local clone of your github repo.

### Add General Assembly as Upstream

1. Open a terminal
1. [Navigate](http://linuxcommand.org/lts0020.php) to the directory where you keep your local course files.
1. Inside the repository directory, `git status` will confirm that you are in the right place.
1. Paste and run `git remote add upstream git@github.com:ga-students/FEWD_HK_5.git`
1. `git remote -v` will confirm that you have sucessfully added an upstream remote.


### Git for SublimeText3

1. [Install](http://www.sublimetext.com/3) `SublimeText3' for your OS.
1. Install `Package Manager` (https://sublime.wbond.net/installation).
1. Press `ESC` to close the console.
1. Install the `Git` extension
	1. Open the command palette
		* Win: `CTRL + SHIFT + P`
		* OSX: `CMD + SHIFT + P`
		* Lin: `CTRL + SHIFT + P`
	1. Type 'install' , select the `Package Manage : Install Package` option.
	1. Type 'git' , wait a bit, select the `Git` option.

## Git Workflow

The Git Workflow is completely handled from the SublimeText (**ST**) Editor. Commands are issues from the Comman Palette (**CP**) which you can call up with the shortcut
	* Win: `CTRL + SHIFT + P`
	* OSX: `CMD + SHIFT + P`
	* Lin: `CTRL + SHIFT + P`

Git is essentially a command line app, but with the git extension for SublimeText you installed earlier, you don't need to be in a terminal to manage your local repository's history. For any of these commands to work however you need to add the _root_ of your repository as a project in SublimeText.

### Adding your Repository as a Project in SublimeText

1. Open the ST Command Palette (**CP**)
1. **CP** : Type `project`, select `Project : Add Folder`
1. Navigate to the root (the directory which contains all your course files) and add it
1. Open the ST Command Palette (**CP**)
1. **CP** : Type `project`, select `Project : Save As`

### Add your changes to Github

1. Open the ST Command Palette (**CP**)
1. **CP** : Type `git add`, select `Add Files ...`
1. **CP** : Select the specific files you want to add, or select `All Files - including untracked` if you want to add everything
1. **CP** : Type `git commit`, select `Git Commit`
1. A review of your changes open up in a new tab. Inspect these changes to make sure this is what you want to add as a 'checkpoint' to your version control history.
1. Write a short message on the first line as your [commit message](http://who-t.blogspot.de/2009/12/on-commit-messages.html).
1. Close the tab (`CMD/CTRL + W`) to commit the changes. It is now in your version control history.
1. **CP** : Type `git push`, select `Git Push`, to send the changes to GitHub
1. If you get an `! [rejected] master -> master (non-fast-forward)` error message, try 'Git Pull' before doing 'Git Push', resolve [merge conflitcs](#Resolving-Merge-Conflicts) as necessary.

### Pull in changes from upstream

1. Open the ST Command Palette (**CP**)
1. **CP** : Type `git custom`, select `Git Custom Command`, to enter a custom command. The Git Command Prompt (**GCP**) will pop up at the bottom of the screen.
1. **GCP** : Type `pull upstream`
1. If you get an `! [rejected] master -> master (non-fast-forward)` error message, resolve [merge conflitcs](#Resolving-Merge-Conflicts) as necessary.

### Resolving Merge Conflicts

1. God help you.
1. Just kidding. The git merge error message will have told you which files were affected.
1. Open these files and remove the lines resulting in the merge conflict. They are wrapped by `<<<<<<`.
1. Add and Commit the file, in your commit message, mention that it resolves a merge conflict.

### Useful Git Tips and Tools

All these commands are available from the Command Palette. It helps to understand that Git has a [staging area](http://betterexplained.com/articles/aha-moments-when-learning-git/) and offers [branch](https://www.atlassian.com/git/tutorial/git-branches#!branch) support.

#### Committing and Reseting

* `Git Quick Commit`, Add Current File/Commit rolled into one. Ideal for small changes.
* `Git Reset (unstage) Current File`, unstage (don't track changes when commiting) for this file, though changes remain intact
* `Git Reset (unstage) All`, remove everything from your staging area, so you may select the files you want to reference in this commit a-fresh.
* `Git Checkout Current File` , reset file to its last state in the repository
* `Git Reset (hard) HEAD`, reset _all_ tracked files to the state the were in the most recent commit.[Potentially Dangerous](http://stackoverflow.com/questions/9529078/git-for-a-beginner-git-reset-hard-head),

#### Status and History

* `Git Status` , see which files are changes _and_ have been added (staged) for your next commit.
* `Git Diff All` , see which lines were changes even those which _aren't_ staged for your next commit.
* `Git Diff Stages` , see which lines are changes _and_ have been added (staged) for your next commit.
* `Git Log All` , display commit history
* `Git Graph All` , display a graph of the branch development history.
* `Git Blame` , see who wrote which line when for the current file

#### Branching

* `Git Branch New`, create a new branch to work on. Takes current state of the files as its starting point.
* `Git Branch Merge`, merge the current branch back into another branch.
* `Git Branch Change`, change from current branch to another branch.
* `Git Branch Delete`, delete a branch after you've merged it into your main branch, or have abandonned the experiment.
