import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store"
import { selectOompaLoompasState } from "../store/oompaLoompa.selectors"
import { fetchDetailOompaLoompas } from "../store/thunks/oompaLoompaThunk"


function useDetailOompaLoompa() {
    const paramId = useLocation().pathname.split('/')[1]
    const {list: oompaLoompas} = useAppSelector(selectOompaLoompasState)
    const dispatch = useAppDispatch()
    const oompaLoompa = oompaLoompas.find(oompaLoompa => oompaLoompa.id === Number(paramId))

    useEffect(() => {
       if(oompaLoompa && oompaLoompa.details) return
        if(oompaLoompa && !oompaLoompa?.details) {
        dispatch(fetchDetailOompaLoompas(Number(paramId)));
        }
    }, [paramId, dispatch])

  return {oompaLoompa}
}

export default useDetailOompaLoompa