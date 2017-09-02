# quotey

quotey is a simple command line tool that displays a random quote from your custom collection or WikiQuote on shell startup. 

![quotey]('https://raw.githubusercontent.com/galuhsahid/quotey/master/screencap.gif')

## Install

```
$ npm install -g quotey
```

## Usage

### Custom collection

#### Set directory

First, create a new directory (or choose an existing directory) where you will put all of your collections in. This is going to be the folder that quotey will look for. For example, I want to put all my quotes in a directory called "quotes" (you can name it anything you want!).

In the terminal, navigate (`cd`) to the "quotes" directory. Take note of the absolute path by running `pwd` because we're going to need this later:

```
pwd

/Users/galuhsahid/Documents/quotes
```

#### Create your own collection(s)

Each collection is represented by a .json file. For example, if you want to make a collection of stoicism quotes, you can do so by creating a .json file in the **quotes** directory. Name it anything you want, say, **"favorite-stoicism-quotes.json"**.

The structure of the file looks like this:

```
{
    "name": "My Favorite Stoicism Quotes",
    "quotes": [
        {
            "content": "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", 
            "title": "Marcus Aurelius" 
        },
        {
            "content": "It is the power of the mind to be unconquerable.", 
            "title": "Seneca" 
        }
    ]
}
```

Feel free to add more quotes to the list!

```
{
    "name": "My Favorite Stoicism Quotes",
    "quotes": [
        {
            "content": "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", 
            "title": "Marcus Aurelius" 
        },
        {
            "content": "It is the power of the mind to be unconquerable.", 
            "title": "Seneca" 
        },
        {
            "content": "What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.", 
            "title": "Epictetus" 
        }
    ]
}
```

By building your own collection, you can also use quotey not to only display quotes, but also display your favorite poems, passages, &amp; many more on shell startup.

#### Execute on startup

It's the fun part! We have to configure our shell so that it will run quotey on every shell startup.

Depending on the shell you're using, the configuration file that needs to be edited might be different for everyone. 

- If you're using **zsh**, you're going to edit your `.zshrc` file.

```
$ echo 'export QUOTEY_CUSTOM_FOLDER="[absolute path of your collections directory]"' >> ~/.zshrc
```

```
$ echo 'quotey -c "favorite-stoicism-quotes.json"' >> ~/.zshrc
```


- If you're using **bash**, you're going to edit your `.bash_profile` file.

```
$ echo 'export QUOTEY_CUSTOM_FOLDER="[absolute path of your collections directory]"' >> ~/.bash_profile
```

```
$ echo 'quotey -c "favorite-stoicism-quotes.json"' >> ~/.bash_profile
```

Anytime you want to use a different collection, simply create a new collection in the directory &amp; change the collection name in your shell configuration file.

### From WikiQuote

quotey is also able to automagically grab a person's quote from WikiQuote, simply given the person's name.

- If you're using **zsh**, you're going to edit your `.zshrc` file.

```
$ echo 'quotey -w "Steve Jobs"' >> ~/.zshrc
```

- If you're using **bash**, you're going to edit your `.bash_profile` file.

```
$ echo 'quotey -w "Steve Jobs"' >> ~/.bash_profile
```

If you've had enough of Steve Jobs &amp; wants to display quotes from Picasso, simply change it in your shell configuration file.
