import React, {memo} from "react";
import {useQuery} from "@tanstack/react-query";
import {getMovies} from "./_api/movie/movie.api.service";
import {MovieModel} from "./_models/movie.model";
import {AxiosResponse} from "axios";
import BaseResponseModel from "../shared/_models/base.response.model";
import Autcomplete from "../components/Autcomplete";

function Movies() {
    const query = useQuery<AxiosResponse<BaseResponseModel<MovieModel[]>>>(['movies'], getMovies)

    if (query.isLoading) {
        return <div>
            Loading...
        </div>
    }
    console.log(query.data?.data.results);



    return <div>
        Movies
       {/*@ts-ignore*/}
        <Autcomplete {...{
            label: 'Movies',
            options: query.data?.data.results.map((item) => {
                return {
                    label: item.title,
                    id: item.id
                }
            })
        }}/>
        {
            // @ts-ignore
            query.data?.data.results.map((item) => {
                return <div>
                    {item.title}
                </div>
            })
        }
    </div>
}

export default memo(Movies);
