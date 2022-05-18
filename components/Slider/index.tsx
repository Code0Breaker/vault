import { Box } from "@mui/system";
import style from './style.module.css'

const marks = [
    {
        value: 0,
        label: '25GB',
    },
    {
        value: 10,
        label: '200GB',
    },
    {
        value: 20,
        label: '400GB',
    },
    {
        value: 30,
        label: '600GB',
    },
    {
        value: 40,
        label: '800GB',
    },
    {
        value: 50,
        label: '1000GB',
    },
    {
        value: 60,
        label: '1200GB',
    },
    {
        value: 70,
        label: '1400GB',
    },
    {
        value: 80,
        label: '1600GB',
    },
    {
        value: 90,
        label: '1800GB',
    },
    {
        value: 100,
        label: '2TB',
    },
];
export default function Slider({color = 'white'}:{color?:string}) {
    return (
        <Box>
            <input className={style.range__input} type="range" list="tickmarks" style={{ maxWidth: 1000 , width: '100%'}} min={0} max={100}/>
            <datalist id="tickmarks"  className={style.range__list} style={{ display: 'flex', appearance: 'none', maxWidth: 1000 ,width: '100%', justifyContent:'space-between' }}>
                {
                    marks.map((item) => {
                        return <option key={item.value} value={item.value} style={{color:color}}>{item.label}</option>
                    })
                }
            </datalist>
        </Box>
    )
}