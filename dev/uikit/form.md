## Form

```html_example
<!-- <form data-validate>
    <div class="grid-x grid-margin-x">
        <div class="cell medium-4">
            <div class="field">
                <label for="input-text-1">Input Label</label>
                <input name="input-text-1" id="input-text-1" type="text" placeholder="placeholder" required>
            </div>
        </div>
        <div class="cell medium-4">
            <div class="field">
                <label for="input-text-2">Input Label</label>
                <input name="input-text-2" id="input-text-2" type="text" required>
                <span class="help-text">This is the help text</span>
            </div>
        </div>
        <div class="cell medium-4">
            <div class="field">
                <label for="input-text-3">Input Label</label>
                <input name="input-text-3" id="input-text-3" type="text" disabled>
            </div>
        </div>
        <div class="cell medium-4">
            <div class="field">
                <label for="input-text-4">Input Label</label>
                <input name="input-text-4" id="input-text-4" type="text" placeholder="placeholder" required>
            </div>
        </div>
        <div class="cell medium-4">
            <div class="field">
                <label for="input-select-1">Select Box</label>
                <select name="input-select-1" id="input-select-1" required>
                    <option value="">Choose..</option>
                    <option value="husker">Husker</option>
                    <option value="starbuck">Starbuck</option>
                    <option value="hotdog">Hot Dog</option>
                    <option value="apollo">Apollo</option>
                </select>
            </div>
        </div>
        <div class="cell medium-4">
            <div class="field">
                <label for="input-select-2">Select Box</label>
                <select name="input-select-2" id="input-select-2" disabled>
                    <option value="husker">Husker</option>
                    <option selected value="starbuck">Starbuck</option>
                    <option value="hotdog">Hot Dog</option>
                    <option value="apollo">Apollo</option>
                </select>
            </div>
        </div>
        <div class="cell medium-6">
            <div class="field field--boolean">
                <input type="checkbox" required id="input-id-1" name="input-name-1" value="1">
                <span class="checkbox-input"></span>
                <label for="input-id-1" class="">Input Label</label>
            </div>
            <div class="field field--boolean">
                <input type="checkbox" required id="input-id-2" name="input-name-2" value="2">
                <span class="checkbox-input"></span>
                <label for="input-id-2" class="">Input Label</label>
            </div>
        </div>
        <div class="cell medium-6">
            <div class="field field--boolean">
                <input type="radio" required id="input-id-3" name="input-name-3" value="3">
                <span class="radio-input"></span>
                <label for="input-id-3" class="">Input Label</label>
            </div>
            <div class="field field--boolean">
                <input type="radio" required id="input-id-4" name="input-name-3" value="4">
                <span class="radio-input"></span>
                <label for="input-id-4" class="">Input Label</label>
            </div>
        </div>
        <div class="cell">
            <div class="field">
                <label for="textarea-id-1">Textarea Label</label>
                <textarea name="textarea-id-1" id="textarea-id-1" placeholder="placeholder" rows="4" required></textarea>
            </div>
        </div>
        <div class="cell form--actions">
            <button class="button">Submit</button>
        </div>
    </div>
</form> -->


<form id="form1" method="POST" novalidate="" data-validate>

        <div class="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Name" required="" minlength="6" maxlength="18">
        </div>

        <div class="field">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" required="" minlength="6" maxlength="18">
        </div>

        <div class="field">
            <label for="password_confirmation">Confirm Password</label>
            <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="Password again" required="" minlength="6" maxlength="18">
        </div>

        <div class="field">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="E-mail" required="" maxlength="18" data-ajax="/api/users/email-exists/?q={value}">
            <small>Try <i>test@test.com</i> for ajax validation</small>
        </div>

        <div class="field">
            <label for="select">Select</label>
            <select name="select" id="select" class="c-select form-control" required="">
                <option value="" selected="">Select option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="field">
            <label for="photo">Photo</label>
            <input type="file" name="photo" accept="image/jpeg, image/png" id="photo" class="form-control" placeholder="Photo" required="" maxfilesize="1" mindimensions="500x500">
            <small><ul>
                <li>Try uploading non-images even if they have .png/.jpg extension</li>
                <li>Images &lt; 500x500px will be invalid</li>
                <li>And try uploading images larger then 1MB</li>
            </ul></small>
        </div>

        <div class="field">
            <label for="about">About</label>
            <textarea name="about" id="about" class="form-control"></textarea>
        </div>

        <div class="field">
            <label class="c-input c-radio">
                <input name="agree" type="radio" value="1" required="">
                <span class="c-indicator"></span>
                I agree with Terms of Service
            </label>
        </div>

        <input type="submit" class="btn btn-primary" value="Submit">

    </form>
```
