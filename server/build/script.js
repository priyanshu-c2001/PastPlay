document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('/shows');
    const names = await response.json();
    const cardContainer = document.getElementById('card-container');
    const numberOfCards = names.length;

    function createCard(name, ratings) {
        const card = document.createElement('div');
        card.classList.add(
            'from-yellow-200',
            'to-amber-200',
            'bg-gradient-to-tl',
            'hover:from-yellow-300',
            'hover:to-yellow-200',
            'hover:shadow-gray-400',
            'hover:shadow-[0px_0px_10px_5px]',
            'cursor-pointer',
            'hover:scale-95',
            'transition-all',
            'duration-900',
            'relative',
            'p-4',
            'rounded-3xl',
            'flex',
            'items-center',
            'flex-col',
            'justify-center',
            'border',
            'border-yellow-600',
            'border-opacity-50'
        );

        card.innerHTML = `
            <img src="posters/${name}.jpg" alt="${name}" class="mb-4 rounded-lg h-72">
            <div class="w-auto flex justify-around items-start mb-2 gap-4">
                <span class="text-amber-700 text-lg font-bold">${ratings}</span>
                <div class="flex flex-col gap-2 items-end">
                    <button class="addBtn bg-amber-900 py-2 px-2 text-balance rounded-sm hover:bg-amber-800">+</button>
                    <p class="addPara text-yellow-700 text-wrap font-extralight opacity-0 transition-all duration-1000">Add to Watchlist</p>
                </div>
            </div>
            <h2 class="text-xl font-roboto-slab font-semibold mb-2 text-gray-900 hover:text-white cursor-pointer duration-700">${name}</h2>
            <form action="/watch" method="get">
                <input type="hidden" name="name" value="${name}"> 
                <button class="bg-amber-500 hover:bg-amber-700 text-white px-4 py-2 rounded-lg mb-2 font-pridi transition-all duration-1000">Watch</button>
            </form>
        `;

        cardContainer.appendChild(card);
    }

    for (let i = 0; i < numberOfCards; i++) {
        createCard(names[i].showName, names[i].ratings);
    }

    // Add event listeners for dynamically created elements
    cardContainer.addEventListener('mouseenter', (event) => {
        if (event.target.classList.contains('addBtn')) {
            event.target.nextElementSibling.classList.remove('opacity-0');
        }
    }, true);

    cardContainer.addEventListener('mouseleave', (event) => {
        if (event.target.classList.contains('addBtn')) {
            event.target.nextElementSibling.classList.add('opacity-0');
        }
    }, true);

    cardContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('addBtn')) {
            const button = event.target;
            button.textContent = button.textContent === '+' ? '✓' : '+';
    
            const cardElement = button.closest('.p-4'); 
    
            const titleElement = cardElement.querySelector('h2'); 
            const ratingElement = cardElement.querySelector('span');
    
            const title = titleElement.textContent;
            const rating = ratingElement.textContent;
            const thumbnail = `posters/${title}.jpg`;
    
            const item = {
                title: title,
                rating: rating,
                thumbnail: thumbnail,
            };
    
            fetch('http://localhost:3000/add-to-watchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => console.log(data))
                .catch(error => console.error('There was a problem with the fetch operation:', error));
        }
    });


    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');

    if (userMenuButton) {
        userMenuButton.addEventListener('click', function () {
            userMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', function (event) {
            if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
                userMenu.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('scroll', () => {
    const thumbnail = document.getElementById('thumbnail');
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const opacity = Math.min(1, scrollPosition / maxScroll);

    // Set the opacity of the image, making it darker as you scroll
    thumbnail.style.opacity = 1 - (opacity * 3.5); // Adjust the multiplier to control the darkness
});

const icons = document.querySelectorAll('.icon');
const iconDesc = document.querySelectorAll('.icon-desc');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        iconDesc.forEach(desc => {
            desc.classList.remove('hidden');
        });
    });
    icon.addEventListener('mouseleave', () => {
        iconDesc.forEach(desc => {
            desc.classList.add('hidden');
        });
    });
});
