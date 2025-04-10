document.addEventListener("DOMContentLoaded", () => {
// input "range" script 
    let range = document.querySelector('.range-input');
    let output = document.querySelector('.range-output');
    
    const onRangeInput = () => {
        output.textContent = range.value;
    };

    range.addEventListener("input", onRangeInput);

// input "file" script
    const fileBtn = document.getElementById('ffile');
    fileBtn.addEventListener('change', function (e) {
        e.preventDefault();
        if (this.files && this.files.length == 1) {
            const textContainer = this.nextElementSibling.querySelector('.field_file-label--text');
            const fileName = e.target.value.split('\\').pop();
            if (textContainer) {
                textContainer.textContent = fileName || textContainer.dataset.text;
                return true;
            }
        }
        return false;
    });

// select script
    const selectBtn = document.getElementById('dropdown_select');
    const selectLabel = document.querySelector('.dropdown_label');

    document.addEventListener('mouseup', function(e) {
        if (!selectLabel.contains(e.target) && selectBtn.checked) {
            selectBtn.checked = false;
        }
    });

    const cSelect = document.getElementById('js-dropdown_list');
    const cSelected = document.getElementById('dropdown_selected');
    const cOption = document.querySelectorAll('.dropdown_list-item');
    const cSelectOutput = document.querySelector('.dropdown_button-text');

    cSelect.addEventListener('click', function(event) {
        if (!event.target.classList.contains('selected') && event.target.classList.contains('dropdown_list-item')) {
            cOption.forEach(item=>{
                item.classList.remove('selected');
            })
            event.target.classList.add('selected');
            cSelected.value = event.target.dataset.option;
            cSelectOutput.textContent = event.target.dataset.option;
        }
    });
});