   
    function findatable(){
        var date = document.getElementById('date').value;
        var select = document.getElementById('time');
        var time = select.options[select.selectedIndex].text;
        var select = document.getElementById('party-size');
        var size = select.options[select.selectedIndex].text;

        if(!date) {
            window.alert("Please select a date!")
        } else {
            window.alert("Your reservation is confirmed for " + size + " guests on " + date + " at " + time + ". We look forward to welcoming you soon!");
        }

    }
