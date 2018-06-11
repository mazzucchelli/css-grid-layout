<h1 class="ss-section-title">Typography</h1>
<h2 class="ss-section-title">Headers</h2>
``` html_example
<h1>Header 1 - H1</h1>
<h2>Header 2 - H2</h2>
<h3>Header 3 - H3</h3>
<h4>Header 4 - H4</h4>
<h5>Header 5 - H5</h5>
<h6>Header 6 - H6</h6>
```

<h2 class="ss-section-title">Paragraph</h2>
``` html_example
<p>It’s time to take a tour of the Twinset FW17 collection, on sale right now</p>
```

<h2 class="ss-section-title">Big text</h2>
``` html_example
<div class="big-text">Shop by Look</div>
```






<h1 class="ss-section-title">Buttons & Links</h1>
<h2 class="ss-section-title">Buttons</h2>
``` html_example
<button class="button primary" type="button">Primary button</button>
<button class="button primary" type="button" disabled>Primary button disabled</button>
<button class="button primary hollow" type="button">Secondary button</button>
<button class="button primary hollow" type="button" disabled>Secondary button</button>
```

<h2 class="ss-section-title">Editorial Buttons</h2>
``` html_example
<button class="button editorial" type="button">Let me see it</button>
```

<h2 class="ss-section-title">Links</h2>
``` html_example
<a href="#">Link</a>
<a href="#" class="btn btn-primary">Primary Button Link</a>
<a href="#" class="btn btn-secondary">Secondary Button Link</a>
<a href="#" class="underline">Underlined Link</a>
```




<h1 class="ss-section-title">Grid</h1>
Check out the guide for the grid [here](https://foundation.zurb.com/sites/docs/xy-grid.html).






<h1 class="ss-section-title">Forms</h1>
Read the form validation [documentation](http://parsleyjs.org/doc/index.html) to extend the current settings

``` html_example
<form data-validate>
    <label>
        Input Label
        <input type="text" placeholder="Placeholder" id="first-field" required data-parsley-required-message="We need this!">
    </label>
    <p class="help-text">Magna Mollis Vulputate Vehicula Quam</p>

    <label>
        Input Label
        <input type="text" placeholder="Placeholder" required 
        data-parsley-equalto="#first-field"
        data-parsley-required-message="We need this too!"
        data-parsley-equalto-message="This should be equal to the other field!">
    </label>
    <p class="help-text">Magna Mollis Vulputate Vehicula Quam</p>

    <button class="button primary">Submit</button> <button type="reset" class="button primary hollow">Reset</button>
</form>
```