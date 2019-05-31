# Standard grid system
Use a standard grid with `.grid` wrapper
```html_example
<div class="grid">
    <div class="cell small-1 medium-9">1</div>
    <div class="cell small-11 medium-3">11</div>
    <div class="cell small-7 large-6">7</div>
    <div class="cell small-5 large-6">5</div>
</div>
```



# Flex helpers

```html_example
<div class="grid">
    <div class="cell">
        <h4>Flexbox helpers</h4>
    </div>
</div>
<div class="flex">
    <div class="box-example box flex align-center">
        <span class="capitalize">auto</span>
    </div>
    <div class="box-example box flex align-center">
        <span class="capitalize">auto</span>
    </div>
    <div class="box-example box flex align-center">
        <span class="capitalize">auto</span>
    </div>
    <div class="box-example box flex align-center">
        <span class="capitalize">auto</span>
    </div>
</div>
<div class="flex">
    <div class="box-example box flex align-center">
        <span class="capitalize">auto</span>
    </div>
    <div class="box-example box shrink flex align-center add-margin">
        <span class="capitalize">shrink & margin</span>
    </div>
    <div class="box-example box shrink flex align-center add-padding">
        <span class="capitalize">shrink & padding</span>
    </div>
    <div class="box-example box flex align-center add-margin-x">
        <span class="capitalize">auto & margin</span>
    </div>
    <div class="box-example box flex align-center align-middle">
        <span class="capitalize">auto & middle</span>
    </div>
</div>
```



# Typography

```html_example
<div class="grid">
    <div class="cell medium-6">
        <h1>Heading - H1</h1>
        <h2>Heading - H2</h2>
        <h3>Heading - H3</h3>
        <h4>Heading - H4</h4>
        <h5>Heading - H5</h5>
        <h6>Heading - H6</h6>
    </div>
    <div class="cell medium-6">
        <p>Nulla aliquip nostrud non <a href="#">dolor</a>. Quis dolore reprehenderit ex do magna enim excepteur officia mollit. In et ex non aliquip cupidatat ea nulla culpa.</p>
    </div>
</div>
```




# Call to actions

```html_example
<div>
    <h2>Try one of these buttons:</h2>
    <a href="#" class="">Simple link</a>
    <a href="#" class="btn">Link Button</a>
    <a href="#" class="btn disabled">Link disabled</a>
    <button href="#" class="btn">Sample Button</button>
    <button href="#" class="btn" disabled>Button disabled</button>
</div>
```




# Form

```html_example
<form>
    <div class="grid">
        <div class="cell medium-4">
            <label>Input Label</label>
            <input type="text" placeholder="placeholder">
        </div>
        <div class="cell medium-4">
            <label>Input Label</label>
            <input type="text">
            <span class="help-text">This is the help text</span>
        </div>
        <div class="cell medium-4">
            <label>Input Label</label>
            <input type="text" disabled>
        </div>
        <div class="cell medium-4">
            <label>Input Label</label>
            <input type="text" placeholder="placeholder">
        </div>
        <div class="cell medium-4">
            <label>Select Box</label>
            <select>
                <option value="husker">Husker</option>
                <option value="starbuck">Starbuck</option>
                <option value="hotdog">Hot Dog</option>
                <option value="apollo">Apollo</option>
            </select>
        </div>
        <div class="cell medium-4">
            <label>Select Box</label>
            <select disabled>
                <option value="husker">Husker</option>
                <option value="starbuck">Starbuck</option>
                <option value="hotdog">Hot Dog</option>
                <option value="apollo">Apollo</option>
            </select>
        </div>
        <div class="cell medium-6">
            <label for="input-id-1" class="boolean-field">
                <input type="checkbox"
                    required
                    id="input-id-1"
                    name="input-name-1"
                    value="1">
                <span class="checkbox-input"></span>
                <span class="checkbox-label">Input Label</span>
            </label>
            <label for="input-id-2" class="boolean-field">
                <input type="checkbox"
                    required
                    id="input-id-2"
                    name="input-name-2"
                    value="2"
                    data-parsley-required-message="This is a custom error message!">
                <span class="checkbox-input"></span>
                <span class="checkbox-label">Input Label</span>
            </label>
        </div>
        <div class="cell medium-6">
            <label for="input-id-3" class="boolean-field">
                <input type="radio"
                    required
                    id="input-id-3"
                    value="3"
                    name="input-name-3"
                    data-parsley-required-message="This is a custom error message!">
                <span class="radio-input"></span>
                <span class="radio-label">Input Label</span>
            </label>
            <label for="input-id-4" class="boolean-field">
                <input type="radio"
                    id="input-id-4"
                    name="input-name-3"
                    value="4">
                <span class="radio-input"></span>
                <span class="radio-label">Input Label</span>
            </label>
        </div>
        <div class="cell">
            <label>Textarea Label</label>
            <textarea placeholder="placeholder"></textarea>
        </div>
    </div>
</form>
```