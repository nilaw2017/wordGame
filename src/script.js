
const textElement = document.getElementById('text');
const optionbuttonsElement = document.getElementById('option-buttons');
const hungerElement = document.getElementById('hunger');
const thirstElement = document.getElementById('thirst');
const staminaElement = document.getElementById('stamina');



let state = {
    hunger: 100,
    thirst: 100,
    stamina: 100,
    amount: 1000
}

startGame = () => {
    // state = {}
    showTextNodes(1)
    // hungerUpdate(1)
}

hungerUpdate = (hungerIndex) => {
    const hunger = textNodes.find(textNode => textNode.id === hungerIndex)
    hungerElement.innerText = hunger.option[0].setState.hunger;
    // console.log(hunger)
}

showTextNodes = (textNodeIndex) => {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text;
    // hungerElement.innerText = textNode.option[0].setState.hunger;
    // thirstElement.innerText = textNode.option[0].setState.thirst;
    // staminaElement.innerText = textNode.option[0].setState.stamina;

    hungerElement.innerText = state.hunger;
    thirstElement.innerText = state.thirst;
    staminaElement.innerText = state.stamina;    
    
    while (optionbuttonsElement.firstChild) {
        optionbuttonsElement.removeChild(optionbuttonsElement.firstChild)
    }
    // console.log(textNode)
    textNode.option.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => {
                selectOption(option)
            });
            optionbuttonsElement.appendChild(button)
        }
    });
    textNode.option.forEach(option => {
        // console.log("option")
    })
}

showOption = (option) => {
    // return true;
    return option.requiredState == null || option.requiredState(state)
}

selectOption = (option) => {
    const newState = option.nextStage
    state = Object.assign(state, option.setState)
    showTextNodes(newState)
}



// const textNodes = [
//     {
//         id: 1,
//         text: "This is part 1",
//         option: [
//             {
//                 text: 'Go right',
//                 setState: { 
//                     hunger: state.hunger, 
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount },
//                 nextStage: 2
//             },
//             {
//                 text: 'Go left',
//                 setState: { 
//                     hunger: state.hunger, 
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount },
//                 nextStage: 2
//             }
//         ]
//     },
//     {
//         id: 2,
//         text: "This is part 2",
        
//         option: [
//             {
//                 text: 'Eat momo (Rs.100 = +20 Hunger, -10 Thirst)',
//                 requiredState: (currentState) => currentState.amount >= 100,
//                 setState: { 
//                     hunger: state.hunger = state.hunger+20,
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount 
//                 },
//                 nextStage: 3
//             },
//             {
//                 text: 'Drink Water (Rs.20 = +10 Hunger, +30 Thirst',
//                 requiredState: (currentState) => currentState.amount >= 20,
//                 setState: { 
//                     hunger: state.hunger, 
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount 
//                 },
//                 nextStage: 3
//             },
//             {
//                 text: 'Take Rest (Free = +20 Stamina, -5 Hunger, -10 Thirst)',
//                 requiredState: (currentState) => currentState.amount >= 0,
//                 setState: { 
//                     hunger: state.hunger, 
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount 
//                 },
//                 nextStage: 3
//             }
//         ]
//     },
//     {
//         id: 3,
//         text: "This is part 3",
//         option: [
//             {
//                 text: 'Go jungle',
//                 setState: { 
//                     hunger: state.hunger = state.hunger+40, 
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount },
//                 nextStage: 4
//             },
//             {
//                 text: 'Go city',
//                 setState: { 
//                     hunger: state.hunger, 
//                     thirst: state.thirst, 
//                     stamina: state.stamina, 
//                     amount: state.amount },
//                 nextStage: 5
//             }
//         ]

//     },
// ]

startGame();