
let state = {
    hunger: 100,
    thirst: 100,
    stamina: 100,
    amount: 1000
}
textNodes = [
    {
        id: 1,
        text: "This is part 1",
        option: [
            {
                text: 'Go right',
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount },
                nextStage: 2
            },
            {
                text: 'Go left',
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount },
                nextStage: 2
            }
        ]
    },
    {
        id: 2,
        text: "This is part 2",
        
        option: [
            {
                text: 'Eat momo (Rs.100 = +20 Hunger, -10 Thirst)',
                requiredState: (currentState) => currentState.amount >= 100,
                setState: { 
                    hunger: state.hunger = state.hunger+20,
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount 
                },
                nextStage: 3
            },
            {
                text: 'Drink Water (Rs.20 = +10 Hunger, +30 Thirst',
                requiredState: (currentState) => currentState.amount >= 20,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount 
                },
                nextStage: 3
            },
            {
                text: 'Take Rest (Free = +20 Stamina, -5 Hunger, -10 Thirst)',
                requiredState: (currentState) => currentState.amount >= 0,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount 
                },
                nextStage: 3
            }
        ]
    },
    {
        id: 3,
        text: "This is part 3",
        option: [
            {
                text: 'Go jungle',
                setState: { 
                    hunger: state.hunger = state.hunger+40, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount },
                nextStage: 4
            },
            {
                text: 'Go city',
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount },
                nextStage: 5
            }
        ]

    },
]

module.exports = {
    state, 
    textNodes
}