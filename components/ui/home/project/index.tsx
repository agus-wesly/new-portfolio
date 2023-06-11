import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../tabs'
import ReactLogo from '@/components/shared/react'
import Vue from '@/components/shared/vue'
import ReactProject from './react-project'
import VueProject from './vue-project'

function Project() {
  return (
    <div className="mx-auto text-center w-full mb-10 mt-12 container">
      <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-6xl sm:leading-[1.15]">
        Project
      </h1>

      <p className="mt-3 text-foreground font-display sm:text-xl">
        All of my work
      </p>

      <div className="mt-10">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="react">
              <div>
                <ReactLogo />
                <span>React</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="vue">
              <div>
                <Vue />
                <span>Vue</span>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="react" className="my-10">
            <ReactProject />
          </TabsContent>
          <TabsContent value="vue">
            <VueProject />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Project
