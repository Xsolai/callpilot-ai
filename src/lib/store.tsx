'use client';
import {createContext,useContext,useEffect,useState} from 'react';
type DemoState={plan:string;onboarded:boolean;campaign:string;agent:string};
type Store=DemoState&{setPlan:(v:string)=>void;setOnboarded:(v:boolean)=>void;setCampaign:(v:string)=>void;setAgent:(v:string)=>void};
const initial:DemoState={plan:'Growth',onboarded:false,campaign:'Q3 Pipeline',agent:'Aria'};
const Context=createContext<Store|null>(null);
export function DemoProvider({children}:{children:React.ReactNode}){
  const[state,setState]=useState(initial);
  useEffect(()=>{const timer=setTimeout(()=>{try{const raw=localStorage.getItem('callpilot-demo');if(raw)setState({...initial,...JSON.parse(raw)})}catch{}},0);return()=>clearTimeout(timer)},[]);
  const patch=(next:Partial<DemoState>)=>setState(current=>{const value={...current,...next};localStorage.setItem('callpilot-demo',JSON.stringify(value));return value});
  return <Context.Provider value={{...state,setPlan:value=>patch({plan:value}),setOnboarded:value=>patch({onboarded:value}),setCampaign:value=>patch({campaign:value}),setAgent:value=>patch({agent:value})}}>{children}</Context.Provider>
}
export function useDemo(){const value=useContext(Context);if(!value)throw new Error('DemoProvider missing');return value}
