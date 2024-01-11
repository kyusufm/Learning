import Color from './Color'

const colors = [
    {
        name: 'red',
        hex: '#ffb3ba'
    },
    {
        name: 'green',
        hex: '#baffc9'
    },
    {
        name: 'blue',
        hex: '#bae1ff'
    },
    {
        name: 'yellow',
        hex: '#ffffba'
    }
    ,
    {
        name: 'orange',
        hex: '#ffdfba'
    }
]
export default function ColorRenderer() {
    return(
        <div className='flex'>
            {colors.map(color => <Color name = {color.name} key = {color.hex} hex = {color.hex} />)}
        </div>
    )
}