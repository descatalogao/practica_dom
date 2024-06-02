motorbikes=   [{
    "modelo": "CB500F",
    "marca": "Honda",
    "precio": 6500,
    "cilindrada": 471,
    "vendedor": "local"
},
{
    "modelo": "MT-07",
    "marca": "Yamaha",
    "precio": 7700,
    "cilindrada": 689,
    "vendedor": "local"
},
{
    "modelo": "Z900",
    "marca": "Kawasaki",
    "precio": 9200,
    "cilindrada": 948,
    "vendedor": "local"
},
{
    "modelo": "Monster 821",
    "marca": "Ducati",
    "precio": 11500,
    "cilindrada": 821,
    "vendedor": "local"
},
{
    "modelo": "Bonneville T120",
    "marca": "Triumph",
    "precio": 12000,
    "cilindrada": 1200,
    "vendedor": "local"
},
{
    "modelo": "GSX-R1000",
    "marca": "Suzuki",
    "precio": 15000,
    "cilindrada": 999,
    "vendedor": "local"
},
{
    "modelo": "Panigale V4",
    "marca": "Ducati",
    "precio": 21000,
    "cilindrada": 1103,
    "vendedor": "local"
},
{
    "modelo": "R 1250 GS",
    "marca": "BMW",
    "precio": 18000,
    "cilindrada": 1254,
    "vendedor": "local"
},
{
    "modelo": "Tiger 900",
    "marca": "Triumph",
    "precio": 14000,
    "cilindrada": 888,
    "vendedor": "local"
},
{
    "modelo": "Africa Twin",
    "marca": "Honda",
    "precio": 13500,
    "cilindrada": 1084,
    "vendedor": "local"
}]
shoplist= document.querySelector('.shoplist')
for (moto of motorbikes){
    h1= document.createElement('h1')
    h1.className='mbtitle'
    h1.innerText= moto.modelo
    shoplist.appendChild(h1)
}
let filtros= [{
    "Marcas": [
        'Kawasaki',
        'Honda',
        'Suzuki',
        'Ducati'
    ]},{
    "Precios": [
        '1000-2500',
        '2500-5000',
        '5000-8000',
        '8000+'
    ]},{

    "Cilindradas": [
        '125cc',
        '250cc',
        '400cc',
        '600cc',
        '600cc+'
    ]},{

    "Carné": [
        'A1',
        'A2',
        'A',
    ]},
]
filters= document.querySelector('.filters')
let buttons=[]
for(filtro of filtros){
    h1= document.createElement('h1')
    h1.className='fttitle'
    h1.innerText= (Object.keys(filtro))
    ul= document.createElement('ul')
    ul.className='filtersul'
    filters.appendChild(h1) 
    filters.appendChild(ul)
    for (value of (Object.values(filtro))){
    for (val of value){
        div=document.createElement('div')
        button=document.createElement('img')
        button.src= "assets/round.png"
        button.className='icon'
        button.id=(val)
        buttons.push(button)
        li= document.createElement('li')
        li.innerText= val
        ul.appendChild(div)
        div.appendChild(button)
        div.appendChild(li)
        }
 
    }
}
console.log(buttons)
for (number in buttons){
    console.log(buttons[number])
    buttons[number].addEventListener('click', function(){
         buttons[number].src = 'http://127.0.0.1:5500/assets/check.png'
})
}

