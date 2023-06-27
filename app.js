$(document).ready(function() {
    $("#taskForm").submit(function(e) {
        e.preventDefault();
        let taskInput = $('input[type="text"].form-control');
        let taskValue = taskInput.val() // taskInput.value
 
        if (taskValue !== '') {
            let taskText = $('<p>').text(taskValue);
            let closeBtn = $('<button>').attr({
                type: 'button',
                class: 'btn-close',
                'aria-label': 'Close'
            });
 
            let checkbox = $('<input>').attr({
                type: 'checkbox',
                class: 'form-check-input'
            });
 
            let taskItem = $('<div>').addClass('d-flex align-items-center');
            taskItem.append(taskText).append(checkbox);
            $('#toDo').children().append(taskItem);
            taskText.before(closeBtn);
        }
    });
 
    $(document).on('click', "button.btn-close", function(){
        $(this).parent().remove();
    })
 
    $(document).on('click', "input[type='checkbox']", function() {
        if ($(this).is(':checked')) {
            let checkTask = $(this).parent();
            $("#taskDone").children().append(checkTask);
        }
    });
});

```