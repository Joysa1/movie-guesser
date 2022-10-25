import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {memo} from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import './App.css';
import Movies from "./movies/movies";

const queryClient = new QueryClient()

function App() {
    return <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Movies/>
    </QueryClientProvider>
}


export default memo(App)
