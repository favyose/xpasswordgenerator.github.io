const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChar = ['!', '@', '#', '$', '&'];

function getRandomElementsFromArray(arr, count) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function displayRandomCharacters() {
    let selectedCharacters = [];
    if (document.getElementById('uppercase').checked) {
        selectedCharacters = selectedCharacters.concat(upperCase);
    }
    if (document.getElementById('lowercase').checked) {
        selectedCharacters = selectedCharacters.concat(lowerCase);
    }
    if (document.getElementById('numeric').checked) {
        selectedCharacters = selectedCharacters.concat(numeric);
    }
    if (document.getElementById('special').checked) {
        selectedCharacters = selectedCharacters.concat(specialChar);
    }

    if (selectedCharacters.length === 0) {
        document.getElementById('textBox').innerText = 'Please select at least one character type.';
        return;
    }

    let randomCharacters = getRandomElementsFromArray(selectedCharacters, 15);
    document.getElementById('textBox').innerText = randomCharacters.join('');
}






