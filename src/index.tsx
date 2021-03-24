import React from 'react';
import { render } from 'react-dom';

const customer = {
    months: {
        january: {
            spent: 218,
            reward: 0
        },
        february: {
            spent: 112,
            reward: 0
        },
        march: {
            spent: 73,
            reward: 0
        }
    }
}

let rewards = [] as any;

Object.keys(customer).forEach(key => {
    let formula = (spent:number) => {
        let reward = 0;
        if(spent >= 50) {
            reward += 90;
        }
        if(spent >= 100) {
            let difference = spent - 100;
            reward = difference * 2;
        }
        rewards.push(reward);
    }
    
    formula(customer.months.january.spent);
    formula(customer.months.february.spent);
    formula(customer.months.march.spent);

    customer.months.january.reward = rewards[0];
    customer.months.february.reward = rewards[1];
    customer.months.march.reward = rewards[2];

});

let element = (
    <div>
        <h1>React Test for Sam</h1>
        <h3>Hi Sam</h3>
        <h4>Our Customers 3 month Spending</h4>
        <ul>
            <li>January Spent: ${customer.months.january.spent} Reward: {customer.months.january.reward} points.</li>
            <li>February Spent: ${customer.months.february.spent} Reward: {customer.months.february.reward} points.</li>
            <li>March Spent: ${customer.months.march.spent} Reward: {customer.months.march.reward} points.</li>
        </ul>
    </div>
)

render(
    element,
    document.getElementById('root')
)