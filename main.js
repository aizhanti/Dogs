const { knex } = require('./knexfile');

const BASE_API_URL = 'https://api.thedogapi.com/v1';

let TARGETDOG;
let BREEDS;
let IMGURL;

const fetchDogBreeds = async () => {
	try {
		const response = await fetch(BASE_API_URL + '/breeds');
		dogBreeds = await response.json();
		populateDogs(dogBreeds);
	} catch (error) {
		console.error(error);
	}
};

const populateDogs = (breeds) => {
	const select = document.querySelector('.breed-select');
	const breedOptions = breeds.map((breed) => {
		const option = document.createElement('option');
		option.text = breed.name;
		option.value = breed.id;
		return option;
	});
	breedOptions.forEach((breedOption) => {
		select.appendChild(breedOption);
	});
};

const fillDogImg = (imgUrl) => {
	document.querySelector('#dog-image').setAttribute('src', imgUrl);
};

const createDescriptionEntry = ({ label, value }) => {
	const descriptionTerm = document.createElement('dt');
	descriptionTerm.textContent = label;
	const descriptionValue = document.createElement('dd');
	descriptionValue.textContent = value;
	const parentElement = document.querySelector('#dog-description');
	parentElement.appendChild(descriptionTerm);
	parentElement.appendChild(descriptionValue);
};

const clearDogDescription = () => {
	const descriptionElement = document.querySelector('#dog-description');

	while (descriptionElement.firstChild) {
		descriptionElement.removeChild(descriptionElement.firstChild);
	}
};

const fillDogDescription = ({ name, temperament, life_span: lifeSpan, height, weight }) => {
	clearDogDescription();
	createDescriptionEntry({ label: 'Name', value: name });
	createDescriptionEntry({ label: 'Temperament', value: temperament });
	createDescriptionEntry({ label: 'Life span', value: lifeSpan });
	createDescriptionEntry({ label: 'Height [cm]', value: height.metric });
	createDescriptionEntry({ label: 'Weight [kg]', value: weight.metric });
};

const getDogByBreed = async (breedId) => {
	const loadingElement = document.querySelector('.loading');
	loadingElement.classList.add('show-loading');
	data = await fetch(BASE_API_URL + '/images/search?include_breed-1&breed_id=' + breedId);
	[json] = await data.json();
	const { url: imgUrl, breeds } = json;
	BREEDS = breeds[0];
	IMGURL = imgUrl;
	fillDogImg(imgUrl);
	fillDogDescription(breeds[0]);
	loadingElement.classList.remove('show-loading');
	return breeds[0], imgUrl;
};

const changeDog = () => {
	getDogByBreed(event.target.value);
	TARGETDOG = event.target.value;
};

const addToFavs = async () => {
	await knex('fav_dos').insert(BREEDS.name, BREEDS.temperament, BREEDS.life_span, BREEDS.height, BREEDS.weight);
	const ins_fav_dogs = await knex('fav_dos').select();
};

fetchDogBreeds();
