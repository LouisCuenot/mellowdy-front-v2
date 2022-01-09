import React, {useState} from 'react';

import './About.css'
import './ImagePlacement.css'
import Bubble from './SubComponents/Bubble';

import Louis from '../../img/About/Teammate/Loulou.png'
import Gregoire from '../../img/About/Teammate/Greg.png'
import Floriane from '../../img/About/Teammate/Flow.png'
import Lena from '../../img/About/Teammate/Lenaze.png'
import Oscar from '../../img/About/Teammate/Oscar.png'
import Lancelot from '../../img/About/Teammate/Lancelot.png'
import Kylian from '../../img/About/Teammate/Kylian.png'

function About() {

  

const teamMembers = [
    
{id:0,  trackindex:0,  name:'Louis Cuenot',  skills:'Front-End developer',  tracks:[
	{trackname:'Prada',  artistname:'24kGoldn',  tracklink:'https://open.spotify.com/track/4wuMS7NGVbU7hdu94K5icd?si=26a7ac59e5724860'},
	{trackname:'GATTI',  artistname:'JACKBOYS',  tracklink:'https://open.spotify.com/track/40mjsnRjCpycdUw3xhS20g?si=392767c51646415a'},
	{trackname:'Killa Killa',  artistname:'KSI',  tracklink:'https://open.spotify.com/track/13Npvj6mfPFQL5DiBKWSIQ?si=b3db7bba65e04d67'},
	{trackname:'I Know You',  artistname:'Lil Skies',  tracklink:'https://open.spotify.com/track/5Cg98kiDYtCEHmjcKD0CJD?si=0e641630a58c42f2'},
	{trackname:'Man Of The Year',  artistname:'Juice WRLD',  tracklink:'https://open.spotify.com/track/7AvprzMsRJpybaalckaT8c?si=3a8c20b13f7a43bc'},
	{trackname:'Miss You a Little',  artistname:'Bryce Vine',  tracklink:'https://open.spotify.com/track/2tijppLc0gaWA2AfPDANvq?si=cd101373e2cb4a09'},
	{trackname:'Bounce Out With That',  artistname:'YBN Nahmir',  tracklink:'https://open.spotify.com/track/5gQcxYXqnofyocKgEbGYKt?si=e64feab9dc804baf'},
	{trackname:'Writing On The Wall',  artistname:'French Montana',  tracklink:'https://open.spotify.com/track/7ntUbTIwmwOD6ygCMRZT6e?si=28823fe83e954113'},
	{trackname:'That Way',  artistname:'Lil Uzi Vert',  tracklink:'https://open.spotify.com/track/2ajzBr7vwHTEBeqDzcsNRC?si=35a20e1de6094d85'},
	{trackname:'Psycho, Pt.2',  artistname:'Russ',  tracklink:'https://open.spotify.com/track/26OhjtaTamFocE08t83ml6?si=d08ed254987f4619'}
			          ]
},
    
{id:1,  trackindex:0,  name:'Grégoire Richard',  skills:'Back-End developer/Askip CTO',  tracks:[
	{trackname:'I remember',  artistname:'Jon Hopkins',  tracklink:'https://open.spotify.com/track/45oJPQDkRbRipePLcXRdEL?si=277dc84fdff846c5'},
	{trackname:'Mysterieum',  artistname:'Hammock',  tracklink:'https://open.spotify.com/track/2dqYago9NyGXXbfdujj9OQ?si=36d23a7d46c8464f'},
	{trackname:'Ultraviolet',  artistname:'Portico Quartet',  tracklink:'https://open.spotify.com/track/1CdFAAgq4NisqVRDfyD8YV?si=5970e52c70024d2d'},
	{trackname:'Donnie Darko',  artistname:'Let\'s Eat Grandma',  tracklink:'https://open.spotify.com/track/5Pn4AYzF6awkiD9zdnsRHt?si=b2fad3028a5f4f2f'},
	{trackname:'Such a Remarkable Day',  artistname:'Charlotte Gainsbourg',  tracklink:'https://open.spotify.com/track/3pilFnaQo0TguWvkOrmrNO?si=2015ebdeb4a24331'},
	{trackname:'Tearing Me Up - RAC Mix',  artistname:'Bob Moses',  tracklink:'https://open.spotify.com/track/3ITsXUBPf1rMjE6C1Hzpb6?si=adbfaf530dbd4a49'},
	{trackname:'Go to keep on',  artistname:'The chemical brothers',  tracklink:'https://open.spotify.com/track/4vh6Rn6FVG4w79JmlZ5p7d?si=30d8fb5276914687'},
	{trackname:'Peach',  artistname:'Future Islands',  tracklink:'https://open.spotify.com/track/44Y47AT30lSl5iPMZr6o83?si=8bf2db0755ca4455'},
	{trackname:'Ar.Mour',  artistname:'UNKLE',  tracklink:'https://open.spotify.com/track/6NZy3MCnIf6A6lXpCWCQ0q?si=809f15a684054685'},
	{trackname:'Too Late',  artistname:'Tourist',  tracklink:'https://open.spotify.com/track/5F187Is00MF7PGwgeCbS8c?si=388d84b3ba1643eb'}
								]
},

{id:2,  trackindex:0,  name:'Floriane Ryan',  skills:'UI/UX Designer',  tracks:[
  {trackname:'Addicted to you',  artistname:'Shakira',  tracklink:'https://open.spotify.com/track/4zy1s9GnxWsNzZp1688euA?si=5016e116780a4ce2'},
  {trackname:'Round round',  artistname:'Sugababes',  tracklink:'https://open.spotify.com/track/5O2Ft5ENCfAh6JCgykJs76?si=1a1b492e23d645b2'},
  {trackname:'When you find me',  artistname:'Plenka',  tracklink:'https://open.spotify.com/track/5Ea4HMH63TSbA19V81HYa9?si=54b485b0506d40e2'},
  {trackname:'Shy Away',  artistname:'Twenty One Pilots',  tracklink:'https://open.spotify.com/track/2nG54Y4a3sH9YpfxMolOyi?si=41cad83201d0413c'},
  {trackname:'NOT SOBER',  artistname:'The Kid Laroi',  tracklink:'https://open.spotify.com/track/1JXBNvlDEl2epKSJ9EOgKX?si=4eec82e289b94226'},
  {trackname:'Needed me',  artistname:'Rihanna',  tracklink:'https://open.spotify.com/track/4pAl7FkDMNBsjykPXo91B3?si=22b7052550614e10'},
  {trackname:'Valentino',  artistname:'24kGoldn',  tracklink:'https://open.spotify.com/track/6piAUJJQFD8oHDUr0b7l7q?si=dff3c83fa8364d5b'},
  {trackname:'Pain',  artistname:'PinkPantheress',  tracklink:'https://open.spotify.com/track/4S4QJfBGGrC8jRIjJHf1Ka?si=de704ee37a7d4b96'},
  {trackname:'GOODMORNINGTOKYO!',  artistname:'TOKYO\'S REVENGE',  tracklink:'https://open.spotify.com/track/0Q2n5yzl2XRqYbV77tZNYp?si=e70fdd0f52ab483b'},
  {trackname:'For The Night',  artistname:'Pop Smoke',  tracklink:'https://open.spotify.com/track/0PvFJmanyNQMseIFrU708S?si=9ddd4298378d489a'}
                ]
},

{id:3,  trackindex:0,  name:'Léna Vulliez',  skills:'UI/UX Designer',  tracks:[
  {trackname:'Pauline',  artistname:'Pomme',  tracklink:'https://open.spotify.com/track/4ysbxlUlb00V0vFvq4Ixk1?si=17aac5eb8e3b4e13'},
  {trackname:'Don\'t call me angel',  artistname:'Ariana Grande',  tracklink:'https://open.spotify.com/track/6zegtH6XXd2PDPLvy1Y0n2?si=25f9b21749024589'},
  {trackname:'Aristocrate',  artistname:'Heuss l\'enfoiré',  tracklink:'https://open.spotify.com/track/7gNlaZaMIjRUfnAYd9Dvmt?si=1c5e38fde16c4266'},
  {trackname:'Genius',  artistname:'Sia',  tracklink:'https://open.spotify.com/track/4xigPf2sigSPmuFH3qCelB?si=5f53edc502ca49d8'},
  {trackname:'I need you tonight',  artistname:'Punkin Machine',  tracklink:'https://open.spotify.com/track/12SY1IDzol5dg1yBTUoKYx?si=c91c287c1bb6463f'},
  {trackname:'Break my heart',  artistname:'Dua Lipa',  tracklink:'https://open.spotify.com/track/017PF4Q3l4DBUiWoXk4OWT?si=86f9290cd9e4479c'},
  {trackname:'La dot',  artistname:'Aya Nakamura',  tracklink:'https://open.spotify.com/track/3aRgAfrt6aQW8IimLq2aVG?si=3df6b337b3d243e7'},
  {trackname:'Thefear',  artistname:'Parcels',  tracklink:'https://open.spotify.com/track/3CC8GnChqlFoM49XBDAZ0w?si=937f5eb67b6f4da9'},
  {trackname:'Don\'t Panik',  artistname:'La Fine Equipe',  tracklink:'https://open.spotify.com/track/501rgKmJ2pA7XogmN5dBo5?si=ae48ddef6037495f'},
  {trackname:'Into the unknown',  artistname:'Panic! At The Disco',  tracklink:'https://open.spotify.com/track/421eObjg0DTm2qajJl5OJm?si=c29e7ceb8d014eeb'}
                ]
},

{id:4,  trackindex:0,  name:'Oscar Satre',  skills:'Back-End developer',  tracks:[
  {trackname:'Stay',  artistname:'Cheat Code',  tracklink:'https://open.spotify.com/track/7wGoRwE6MZnm9flIMKWPul?si=9e515206d2154d37'},
  {trackname:'One More Time',  artistname:'Robin Schulz',  tracklink:'https://open.spotify.com/track/3LdIlLTimyTyVfscwHwMiQ?si=b9e595e7b1384368'},
  {trackname:'Down For The Ride',  artistname:'ItaloBrothers',  tracklink:'https://open.spotify.com/track/0L8NzGlH4nmnbOUSg4gO72?si=8450b4cacd2e42d4'},
  {trackname:'Untouchable',  artistname:'Tritonal',  tracklink:'https://open.spotify.com/track/05dL7chWJaVjMJnGO1YCKk?si=05e91767fa484178'},
  {trackname:'Run It Up',  artistname:'Seeb',  tracklink:'https://open.spotify.com/track/6KQYQ5ycUHmDYFjL2jLXYC?si=77c0e52a80a94a1b'},
  {trackname:'Feel Good',  artistname:'Gryffin',  tracklink:'https://open.spotify.com/track/0Ev562zA4pmUsBqjxsxxdx?si=6b737a41cf4e4540'},
  {trackname:'Memories',  artistname:'Laidback Luke',  tracklink:'https://open.spotify.com/track/7b5cTNDPRxrnbjQYI7RXX7?si=8496fef974444ab4'},
  {trackname:'Echo',  artistname:'Yves V',  tracklink:'https://open.spotify.com/track/57Zcl7oKKr29qHp38dzzWi?si=ab3af61b30da4ca8'},
  {trackname:'Lay It All On Me',  artistname:'Rudimental',  tracklink:'https://open.spotify.com/track/52yXMESRTSLIF6Xs9WVDlW?si=13eea7c525ad4d91'},
  {trackname:'Limelight',  artistname:'Just A Gent',  tracklink:'https://open.spotify.com/track/3mof6Z6vz6gonsuIEQXank?si=f1aa315a6f724ee5'}
                ]
},

{id:5,  trackindex:0,  name:'Lancelot Perinet-Marquet',  skills:'Marketing officer',  tracks:[
  {trackname:'Somendrom',  artistname:'Hans Philip',  tracklink:'https://open.spotify.com/track/3fVfF207M1h9sxUCGguHhV?si=9486a7e7e0f9464a'},
  {trackname:'Do for Vejle',  artistname:'Veile Boldklub',  tracklink:'https://open.spotify.com/track/76IIFcYspHXvwfsgS2y7KC?si=dc508aeb8bb44047'},
  {trackname:'Baker Street',  artistname:'Gerry Rafferty',  tracklink:'https://open.spotify.com/track/5gOd6zDC8vhlYjqbQdJVWP?si=2886d99ab1564709'},
  {trackname:'Too Much Time On My Hands',  artistname:'Styx',  tracklink:'https://open.spotify.com/track/4hWUOIDHda9XOb1zDchftP?si=c2761f897b19416f'},
  {trackname:'We\'re An American Band - Remastered 2002',  artistname:'Grand Funk Railroad',  tracklink:'https://open.spotify.com/track/3XcjIvaZVUFAIdIYZqY9bd?si=2916a57b1acc4516'},
  {trackname:'Waiting For A Girl Like You',  artistname:'Foreigner',  tracklink:'https://open.spotify.com/track/2OgVsp77En2nju8pnCieVU?si=696c325cfc974a16'},
  {trackname:'If I\'d Been The One',  artistname:'38 Special',  tracklink:'https://open.spotify.com/track/6XomFpGnHv0hYgUoW75dOw?si=44c8481b52e54e27'},
  {trackname:'Le temps de l\'amour',  artistname:'Françoise Hardy',  tracklink:'https://open.spotify.com/track/6rqUOLt9dpfMANLMKTzoWj?si=bfb205fd9bb646d6'},
  {trackname:'Never Been To Spain',  artistname:'Three Dog Night',  tracklink:'https://open.spotify.com/track/61OQuSzsom6geFCA18JwO6?si=bf1bcbd3026b40ef'},
  {trackname:'Take It Back',  artistname:'Drew Sycamore',  tracklink:'https://open.spotify.com/track/0yzEGK3wzVhTPpl9zyqYwF?si=5606815d212f49cf'}
                ]
},

{id:6,  trackindex:0,  name:'Kylian Ferrandez',  skills:'Marketing officer',  tracks:[
  {trackname:'Hey, Soul Sister',  artistname:'Train',  tracklink:'https://open.spotify.com/track/4HlFJV71xXKIGcU3kRyttv?si=b37d8f4495e3405c'},
  {trackname:'Relapse',  artistname:'Slayloverboy',  tracklink:'https://open.spotify.com/track/2A11vABVQtoqVovsbE7Ir2?si=2a6728c4cb7c4b31'},
  {trackname:'Living Life, In The Night',  artistname:'Cheriimoya',  tracklink:'https://open.spotify.com/track/6ChnGkBwnq2HUJD24YhMhW?si=8232c1c4c3f14262'},
  {trackname:'Never Forget',  artistname:'GASHI',  tracklink:'https://open.spotify.com/track/0oFHlnUwZVhizux1FOAsfr?si=68e8980e9d5248c9'},
  {trackname:'It\'s You',  artistname:'Ali Gatie',  tracklink:'https://open.spotify.com/track/5DqdesEfbRyOlSS3Tf6c29?si=7e3b5ded052c4903'},
  {trackname:'Beat',  artistname:'Lil Tracy',  tracklink:'https://open.spotify.com/track/4IOmpWHND1FVjT7EFeZhLp?si=7caae016d3364dbe'},
  {trackname:'I Gotta Feeling',  artistname:'Black Eyed Peas',  tracklink:'https://open.spotify.com/track/4kLLWz7srcuLKA7Et40PQR?si=872dd933472c4624'},
  {trackname:'stressed',  artistname:'Slayloverboy',  tracklink:'https://open.spotify.com/track/0HXwMdqM8vg4gNeh8oOdkR?si=7030b37cdfac457d'},
  {trackname:'All Night',  artistname:'2Scratch',  tracklink:'https://open.spotify.com/track/0Y2EhhpZTKChZNerxIt6T9?si=9760db7793564a85'},
  {trackname:'Get You To The Moon',  artistname:'Kina',  tracklink:'https://open.spotify.com/track/4ZLzoOkj0MPWrTLvooIuaa?si=7f83b94171c0499c'}
                ]
}


  ]

  let teamMembersMap = teamMembers.map(teamMember=>(
      <Bubble key={teamMember.id} teamMember={teamMember} />
    ))

  return (
    <div className="About">
      <div className='titleAbout'>
        <h1>About us</h1>
        <p>Our team was composed of seven students in their third year of the Hetic school, from the Grande Ecole program. We had to create a service application using an api during a week-long Full Stack project. For our team, it will be the api of spotify which will hold our attention, we thus created with this last one a musical application. Our concept is to find you a music playlist based on your mood, and the few criteria you have entered.</p>
        <h2>Getting to know us through music ?</h2>
      </div>
      <div className='bubbles-grid'>
        {teamMembersMap}
        <img src={Louis} alt='Louis Cuenot' className='Loulou'/>
        <img src={Gregoire} alt='Grégoire Richard' className='Greg'/>
        <img src={Floriane} alt='Floriane Ryan' className='Flow'/>
        <img src={Lena} alt='Léna Vuillez' className='Lenaze'/>
        <img src={Oscar} alt='Oscar Satre' className='Oscar'/>
        <img src={Lancelot} alt='Lancelot Perinet-Marquet' className='Lancelot'/>
        <img src={Kylian} alt='Kylian Ferrandez' className='Kylian' />
      </div>
    </div>
  );
}

export default About;