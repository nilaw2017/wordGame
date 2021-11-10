// import {textNodes} from ('./text-node')
// const text = require('./text-node')
// console.log(text)

const textElement = document.getElementById('text');
const optionbuttonsElement = document.getElementById('option-buttons');
const hungerElement = document.getElementById('hunger');
const thirstElement = document.getElementById('thirst');
const staminaElement = document.getElementById('stamina');
const amountElement = document.getElementById('amount')
// const locationElement = document.getElementsByClassName('locationIMG');


let state = {
    hunger: 50,
    thirst: 50,
    stamina: 50,
    amount: 1000
}

startGame = () => {
    state = {}
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
    // amountElement.innerText = state.amount;
    // hungerElement.innerText = state.hunger;
    // thirstElement.innerText = state.thirst;
    // staminaElement.innerText = state.stamina;    

    while (textElement.firstChild) {
        textElement.removeChild(textElement.firstChild)
    }
    textNode.text.forEach(option => {
        if (showOption(option)) {
            const p = document.createElement('p');
            p.innerText = option.dialogue;
            // p.classList.add('btn');
            textElement.appendChild(p)
        }
    });
    
    while (optionbuttonsElement.firstChild) {
        optionbuttonsElement.removeChild(optionbuttonsElement.firstChild)
    }
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
}

showOption = (option) => {
    return true;
    // return option.requiredState == null || option.requiredState(state)
}

selectOption = (option) => {
    const newState = option.nextStage
    state = Object.assign(state, option.setState)
    showTextNodes(newState)
}


const textNodes = [
    {
        id: 1,
        text: [
            {
                dialogue: `Welcome to our game KTMVenture`
            }
        ],
        img: "https://instagram.fktm3-1.fna.fbcdn.net/v/t51.2885-15/e15/s640x640/254437238_223078046518788_1577360234664688757_n.jpg?_nc_ht=instagram.fktm3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=OgSnabz8hsQAX95bgdH&edm=ABJHkxYAAAAA&ccb=7-4&oh=6ff8a0df2909570dbba8aaaa44e66a35&oe=61917377&_nc_sid=fa978c&ig_cache_key=MjcwMzIyMzMzMjA2NDM0MjU3Nw%3D%3D.2-ccb7-4",
        option: [
            {
                text: 'CONTINUE',
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount 
                },
                nextStage: 2
            }
        ]
    },
    {
        id: 2,
        text: [
            {
                dialogue: `Phone Ringing: Tring! Tring! ....`
            }
        ],
        
        option: [
            {
                text: `Pick up the call!`,
                // requiredState: (currentState) => currentState.amount >= 100,
                nextStage: 4
            },
            {
                text: `Cancel the call`,
                nextStage: 3
            }
        ]
    },
    {
        id: 3,
        text: [
            {
                dialogue: `You went to deep sleep again and missed the ADVENTURE! :(`
            }
        ],
        option: [
            {
                text: `RESTART?`,
                nextStage: 1
            }
        ]
    },

    //STAGE 4
    {
        id: 4,
        text: [
            {
                dialogue: `Neel: Namaste Nhu! Why did you call me so early on the morning?`
            },
            {
                dialogue: `Nhuu: Namaste Neel dai! As you said last week we are getting ready to go to Chandragiri Hill.`
            }
        ],
        option: [
            {
                text: `Go without having breakfast`,
                setState: { 
                    hunger: state.hunger -10, 
                    thirst: state.thirst -10, 
                    stamina: state.stamina -5, 
                    amount: state.amount 
                },
                nextStage: 5
            },
            {
                text: `Go after having breakfast`,
                setState: { 
                    hunger: state.hunger +10, 
                    thirst: state.thirst +10, 
                    stamina: state.stamina +5, 
                    amount: state.amount 
                },
                nextStage: 6
            }
        ],
    },

    //STAGE 5
    {
        id: 5,
        text: [
            {
                dialogue: `Neel: Ah finally reached on the meet point. But I am soo hungry.`,
                
            }
        ],
        option: [
            {
                text: `As you found them you are travelling with your brothers to base of Chandragiri Hill `,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount - 20 
                },
                nextStage: 7
            }
        ]
    },

    //STAGE 6
    {
        id: 6,
        text: [
            {
                dialogue: `Neel: Ah finally reached on the meet point. I hope they didn't left me behind`,
                
            }
        ],
        option: [
            {
                text: `Search left`,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina -5, 
                    amount: state.amount 
                },
                nextStage: 8
            },
            {
                text: `Search right`,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina-5, 
                    amount: state.amount 
                },
                nextStage: 9
            },
            {
                text: `Search near buspark`,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina -10, 
                    amount: state.amount 
                },
                nextStage: 10
            },
            {
                text: `Search near teashop`,
                setState: { 
                    hunger: state.hunger +5, 
                    thirst: state.thirst +10, 
                    stamina: state.stamina, 
                    amount: state.amount - 20
                },
                nextStage: 11
            }
        ]
    },

    // STAGE 8
    {
        id: 8,
        text: [
            {
                dialogue: `Neel: Ah! They are not here :(`
            }
        ],
        option: [
            {
                text: `Go back to same checkpoint`,
                nextStage: 6
            }
        ]
    },

    // STAGE 9
    {
        id: 9,
        text: [
            {
                dialogue: `Neel: Ah! They are not here too :(`
            }
        ],
        option: [
            {
                text: `Go back to same checkpoint`,
                nextStage: 6
            }
        ]
    },

    // STAGE 10 
    {
        id: 10,
        text: [
            {
                dialogue: `Neel: It's too crowdy here maybe I should call him`,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount-5 
                },
                nextStage: 12,
            }
        ],
        option: [
            {
                text: `Call them`,
                nextStage: 12
            },
            {
                text: `Go back to same checkpoint`,
                nextStage: 6
            }
        ]
    },

    //STAGE 11
    {
        id: 11,
        text: [
            {
                dialogue: `Neel: Finally found you guys! Sorry I am late :)`
            }
        ],
        option: [
            {
                text: `As you found them you are travelling with your brothers to base of Chandragiri Hill `,
                setState: { 
                    hunger: state.hunger, 
                    thirst: state.thirst, 
                    stamina: state.stamina, 
                    amount: state.amount - 20 
                },
                nextStage: 7
            }
        ]
    },

    //STAGE 12
    {
        id: 12,
        text: [
            {
                dialogue: `Neel: Hello Nhuu, where are you?`
            },
            {
                dialogue: `Nhuu: We are inside the tea shop waiting for you.`
            },
            {
                dialogue: `Neel: Oh alright! I am on my way. I had been searching you people in bus stop`
            }
        ],
        option: [
            {
                text: `Continue`,
                nextStage: 11
            }
        ]
    },

    // STAGE 7
    {
        id: 7,
        text: [
            {
                dialogue: `Meeh: We have finally reached here.`
            },
            {
                dialogue: `Looh: Wow! I had not expected Chandragiri Hill to be that high.`
            },
            {
                dialogue: `Neel: Neither had I. Can we manage to hike up that high within our limited time huh?`
            },
            {
                dialogue: `Nhuu: I do think so. It was your idea to hike up there.`
            },
            {
                dialogue: `Meeh: Then maybe we should change our destination what do you think dai?`
            }
        ],
        option: [
            {
                text: `Go on with Chandragiri Hill`,
                nextStage: 100
            },
            {
                text: `Select another destination`,
                nextStage: 99
            }
        ]
    },
    {
        id: 99,
        text: [
            {
                dialogue: `Neel: I just searched for new destination in MapsApp. Let's go to`
            }
        ],
        option: [
            {
                text: `Kankali Temple`,
                nextStage: 200,
            },
            {
                text: `Kalupandey Hill`,
                nextStage: 300
            },
            {
                text: `Tribhuvan Park`,
                nextStage: 400,
            },
            {
                text: `Switzerland Park`,
                nextStage: 500
            }
        ]
    },

    ////////////////////////////////    CHANDRAGIRI HILL    ////////////////////////////////
    {
        id: 100,
        text: [
            {
                dialogue: `UNDER DEVELOPMENT`
            }
        ]
    },

    ////////////////////////////////    KANKALI TEMPLE      ////////////////////////////////
    {
        id: 200,
        text: [
            {
                dialogue: `UNDER DEVELOPMENT`
            }
        ]
    },

    ////////////////////////////////    KALUPANDEY HILL     ////////////////////////////////
    {
        id: 300,
        text: [
            {
                dialogue: `UNDER DEVELOPMENT`
            }
        ]
    },

    ////////////////////////////////    TRIBHUVAN PARK      ////////////////////////////////
    {
        id: 400,
        text: [
            {
                dialogue: `UNDER DEVELOPMENT`
            }
        ]
    },

    ////////////////////////////////    SWITZERLAND PARK    ////////////////////////////////
    {
        id: 500,
        text: [
            {
                dialogue: `UNDER DEVELOPMENT`
            }
        ]
    },

]

startGame();
