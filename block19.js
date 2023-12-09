const freelancersList = document.getElementById('freelancers-list');
const averagePrice = document.getElementById('average-price');

const freelancers = [
    { name:'Alice',occupation:'Writer',startingPrice: 30},
    { name:'Bob',occupation:'Teacher',startingPrice: 50 },
];

const updateFreelancersList = () => {
    freelancersList.innerHTML = '';
    freelancers.forEach((freelancer) => {
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const occupation = document.createElement('p');
        const startingPrice = document.createElement('p');

        h2.textContent = freelancer.name;
        occupation.textContent = freelancer.occupation;
        startingPrice.textContent = `Starting price: $${freelancer.startingPrice}`;

        li.appendChild(h2);
        li.appendChild(occupation);
        li.appendChild(startingPrice);

        freelancersList.appendChild(li);
    });
};

const updateAveragePrice = () => {
    const totalStartingPrice = freelancers.reduce((total, freelancer) => {
        return total + freelancer.startingPrice;
    }, 0);
    const averageStartingPrice = totalStartingPrice / freelancers.length;
    averagePrice.textContent = `$${averageStartingPrice}`;
};

updateFreelancersList();
updateAveragePrice();

setInterval(() => {
    const newFreelancer = {
        name: 'Carol', occupation: 'Programmer', startingPrice: 70};
   
      freelancers.push(newFreelancer);
    updateFreelancersList();
    updateAveragePrice();
}, 5000);