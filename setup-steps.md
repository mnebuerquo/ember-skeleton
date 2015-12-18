# Steps for setting up this project from scratch:

1. `ember new ember-skeleton` - create a new ember project (`cd
   ember-skeleton` once done so you're in the created directory)

2. Edit bower.json and package.json. Change the version for ember and
   ember-data to "^2.0.0". Then do `npm install` and `bower install`

3. `ember install ember-simple-auth` (You may need to do `bower install`
   or `npm install` afterward.)

4. `ember g route index`

5. `ember g route login`

6. `ember g controller application` - so we can inject the session

7. `ember g controller login` - so we can get the form data

8. `ember install ember-cli-sass` - use sass for css

9. `bower install bootstrap --save` - use bootstrap for layout also,
    use this line in `ember-cli-build.js`:
`app.import('bower_components/bootstrap/dist/css/bootstrap.css');`

10. `ember g adapter application` - to link models to api routes


