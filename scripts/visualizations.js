var speed = 1000; // Default speed

inp_aspeed.addEventListener("input", vis_speed);

// Function to adjust the speed of sorting visualizations
function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch (parseInt(array_speed)) {
        case 1:
            speed = 1;
            break;
        case 2:
            speed = 10;
            break;
        case 3:
            speed = 100;
            break;
        case 4:
            speed = 1000;
            break;
        case 5:
            speed = 10000;
            break;
    }

    // Speed factor: Decrease numerator to increase speed
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed); // Adjust delay based on speed
var c_delay = 0; // This is updated with every div change to show visualization

// Function to update divs (bars) with animations and transitions
function div_update(cont, height, color) {
    window.setTimeout(function () {
        cont.style.transition = `height ${delay_time / 1000}s ease, background-color ${delay_time / 1000}s ease`;
        cont.style.height = height + "%";
        cont.style.backgroundColor = color;
    }, (c_delay += delay_time)); // Update cumulative delay for smooth animation
}

// Function to enable buttons after sorting is done
function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, (c_delay += delay_time)); // Enable buttons after all animations
}

function reset_delay() {
    c_delay = 0;
}
