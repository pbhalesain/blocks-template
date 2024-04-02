import { Icons } from '@/components/icons'
import { CardContent } from '../ui'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const features = [
  {
    title: 'AI-driven Insights',
    description:
      'Personalized recommendations tailored to your business goals.',
    icon: <Icons.aria className="text-primary" />,
  },
  {
    title: 'Empathic Support',
    description:
      'AI assistants with a human touch, understanding your unique needs.',
    icon: <Icons.aria className="text-primary" />,
  },
  {
    title: 'Seamless Integration',
    description:
      'AI solutions that integrate seamlessly with your existing workflows.',
    icon: <Icons.aria className="text-primary" />,
  },
  {
    title: 'Data-driven Optimization',
    description:
      'Leverage AI-powered analytics to optimize your operations and drive growth.',
    icon: <Icons.aria className="text-primary" />,
  },
]

export default function FeaturesSection() {
  return (
    <section>

      <div className="container p-20 md:justify-end justify-center items-center grid grid-cols-2 grid-rows-3 gap-10">
        <div >
          <Card className='w-full bg-blue-100'>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-4">
                  <span><Icons.alarmclock /></span>
                  <div>
                    <p className="leading-none">Automate Repetitive Tasks</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>Streamline Your Workflow with Automation.</CardDescription>
            </CardHeader>
            <CardContent className=' h-[15rem]'>
              <div> <span>Say goodbye to time-consuming, repetitive tasks and hello to increased productivity. Our Generative AI assistant automates tedious processes, freeing up your team to focus on strategic priorities.</span></div>
              <br />
              <br />
              <div><li>Eliminate manual data entry and document processing</li>


                <li>Automate customer support and client communications</li>
                <li>Streamline invoicing, payroll, and other financial tasks
                </li></div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p> Reclaim your time and resources. Implement our Generative AI automation solutions today.</p>
            </CardFooter>
          </Card>
        </div>
        <div className="col-start-2 row-start-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>  <div className="flex items-center space-x-4">
                <span><Icons.handshake /></span>
                <div>
                  <p className="leading-none">Enhance Customer Experiences</p>
                </div>
              </div></CardTitle>
              <CardDescription>Personalize Your Customer Interactions.</CardDescription>
            </CardHeader>
            <CardContent className=' h-[15rem]'>
              <div> <span>Deliver exceptional customer service and build stronger relationships with our Generative AI assistant. Provide tailored responses and personalized experiences that keep your clients coming back.</span></div>
              <br />
              <br />
              <div><li>Engage customers with natural, human-like conversations</li>


                <li>Offer personalized recommendations and solutions</li>
                <li>Provide 24/7 support and instant responses
                </li></div>
            </CardContent>
            <CardFooter className="flex justify-between">
              Transform your customer service with the power of Generative AI. Start today.
            </CardFooter>
          </Card>
        </div>
        <div className="row-start-3">
          <Card className="w-full bg-purple-100">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-4">
                  <span><Icons.braincog /></span>
                  <div>
                    <p className="leading-none">Unlock the Power of Advanced AI</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>Access Cutting-Edge AI Technology.</CardDescription>
            </CardHeader>
            <CardContent className=' h-[15rem]'>
              <div> <span>Leverage the latest advancements in artificial intelligence without the hefty price tag. Our Generative AI assistant provides enterprise-grade capabilities at a fraction of the cost.</span></div>
              <br /><br />
              <div><li>Harness the power of natural language processing and generation</li>
                <li>Integrate intelligent automation to boost efficiency</li>
                <li>Gain access to cutting-edge machine learning models</li></div>
            </CardContent>
            <CardFooter className="flex justify-between">
              Elevate your business with affordable, cutting-edge AI technology. Sign up now.
            </CardFooter>
          </Card>
        </div>

        <div className="col-start-2 row-start-4">
          <Card className="w-full bg-green-100">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-4">
                  <span><Icons.areachart /></span>
                  <div>
                    <p className="leading-none">Make Data-Driven Decisions</p>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>Gain Powerful Insights for Your Business.</CardDescription>
            </CardHeader>
            <CardContent className=' h-[15rem]'>
              <div> <span>Unlock the full potential of your data with our Generative AI-powered analytics and reporting tools. Make informed decisions that drive your business forward.</span></div>
              <br /><br />
              <div><li>Gain deep insights into customer behavior and preferences</li>
                <li>Identify trends and patterns to inform strategic planning</li>
                <li>Optimize operations and streamline decision-making</li></div>
            </CardContent>
            <CardFooter className="flex justify-between">
              Elevate your decision-making with data-driven intelligence. Sign up now.
            </CardFooter>
          </Card>
        </div>
      </div>

    </section >
  )
}