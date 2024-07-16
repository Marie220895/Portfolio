/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'public/img/YzyDigital.png',
		title: 'YzyDigital',
		skills: ['React', 'CSS'],
		descripcion:
			"Initier le développement du site de l'entreprise afin d'exposer notre méthodologie de travail au sein de l'équipe de développeurs et d'établir une organisation structurée, en étroite collaboration avec le lead dev et le gestionnaire de projet.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'public/img/CareneAssurances.png',
		title: 'Carene Asssurances',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			"Création du site internet de Carene assurances qui est une nouvelle branche d'assurance d'Allianz.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'public/img/RepairsAidants.png',
		title: 'RePairs Aidants',
		skills: ['React', 'CSS'],
		descripcion:
			"RePairs Aidants est une action de sensibilisation-formation à destination de ceux qui apportent de l'aide à un proche en situation de handicap.",
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'public/img/DifuzLearning.png',
		title: 'Difuz Learning',
		skills: ['React', 'CSS'],
		descripcion:
			'Difuz Learning conçoit, élabore et diffuse des connaissances à travers des apports de formations transposables dans votre quotidien professionnel. Création de ce site en binôme.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'public/img/Viatlease.png',
		title: 'Viatlease',
		skills: ['React', 'CSS'],
		descripcion:
			'Société spécialisée dans le financement de biens d’équipements et matériels professionnels auprès de TPE, PME et plus grandes entreprises.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'public/img/Fueve.png',
		title: 'Fueve',
		skills: ['React', 'StyledComponents'],
		descripcion:
			"Modification d'un site shopify pour ressembler à 100% à la maquette du client (ajout animation, modification du code source).",
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
