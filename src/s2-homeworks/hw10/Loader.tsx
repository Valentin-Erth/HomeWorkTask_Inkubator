import s from './Loader.module.css'
import CircularProgress from '@mui/material/CircularProgress';
export const Loader = () => {
    return (
        <div className={s.loader}>
            <CircularProgress />
        </div>
    )
}
