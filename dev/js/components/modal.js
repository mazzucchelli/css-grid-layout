class ModalClass {
    // constructor () {}

    init () {
        this.build();

        const tscroll = document.querySelector('.toggle-scroll');
        tscroll.addEventListener('click', e => {
            // const $body = document.getElementsByTagName('body')[0];
            this.enableScroll(document.body.classList.contains('no-scroll'));

            // // get target
            // const modalID = e.currentTarget.dataset.modal;
            // const $modalContent = document.getElementById(modalID);

            // // create main wrapper
            // let $mainWrapper;
            // if (document.querySelector('.modals')) {
            //     $mainWrapper = document.querySelector('.modals');
            // } else {
            //     $mainWrapper = document.createElement('div');
            //     $mainWrapper.classList.add('modals');
            // }

            // // create wrapper
            // const $wrapper = document.createElement('div');
            // $wrapper.classList.add('modal-wrapper');

            // // create wrapper
            // const $veil = document.createElement('div');
            // $veil.classList.add('modal-veil');

            // // append all as body first child
            // $wrapper.innerHTML = $modalContent.innerHTML;
            // $mainWrapper.appendChild($veil);
            // $mainWrapper.appendChild($wrapper);
            // document.body.insertBefore($mainWrapper, document.body.firstChild);

            // $mainWrapper.classList.add('is-visible');
            // $veil.classList.add('is-visible');

            // $veil.addEventListener('click', e => {
            //     e.stopPropagation();
            //     $mainWrapper.classList.add('is-visible');
            //     $veil.classList.remove('is-visible');
            // });
        });
    }

    build () {
        // metatag for scroll data
        var meta = document.createElement('meta');
        meta.classList.add = 'scroll';
        document.getElementsByTagName('head')[0].appendChild(meta);

        // main modals wrapper
        const $mainWrapper = document.createElement('div');
        $mainWrapper.classList.add('modals');
        document.body.insertBefore($mainWrapper, document.body.firstChild);
    }

    enableScroll (bool) {
        const $body = document.body;
        const topScroll = window.pageYOffset || document.documentElement.scrollTop;
        const $scrollMeta = document.querySelector('.scroll');

        if (bool) {
            $body.style.top = '';
            $body.classList.remove('no-scroll');
            window.scrollTo(0, $scrollMeta.dataset.value * 1);
        } else {
            $body.style.top = (-1 * topScroll).toString() + 'px';
            $body.classList.add('no-scroll');
            $scrollMeta.dataset.value = topScroll;
        }
    };
}

const modal = new ModalClass();
export default modal;
