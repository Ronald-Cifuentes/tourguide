import { Step1, Step2, Step3, Step4 } from '../App/App.styled'
import { ShepherdOptionsWithType } from 'react-shepherd'
import { stepId } from './Tour.const '

stepId.push('hundredth')

const getEpvIntro = (params: ShepherdOptionsWithType[]): ShepherdOptionsWithType[] => {
  return params.map(param => ({
    scrollTo: true,
    id: param.id,
    classes: 'epv-intro',
    buttons: [
      {
        classes: 'btn btn-info btn-big',
        text: 'Empezar recorrido',
        type: 'next',
      },
    ],
    text: [
      `
            <p class="title">${param.title}</p>
            <p class="text-content">
                ${param.text}
            </p>
        `,
    ],
  }))
}

const getEpvSteps = (params: ShepherdOptionsWithType[]): ShepherdOptionsWithType[] => {
  return [
    ...params.map(param => ({
      scrollTo: true,
      id: param.id,
      classes: 'epv-steps',
      attachTo: param.attachTo,
      buttons: [
        {
          classes: 'btn btn-info',
          text: 'Siguiente',
          type: 'next',
        },
      ],
      title: `
            <div class="icon-arrow">
                <img src="${
                  import.meta.env.MODE === 'development' ? '../public/Mask.svg' : './Mask.svg'
                }" />
            </div>
            <p class="title">${param.title}</p>
            `,
      text: [
        `
            <div class="icon-arrow"></div>
            <p class="text-content">
                ${param.text}
            </p>
          `,
      ],
    })),
  ]
}

export const steps: ShepherdOptionsWithType[] = [
  ...getEpvIntro([
    {
      id: stepId[0],
      title: '¡Te damos la bienvenida al Seller Center!',
      text: 'Gracias por unirte a Paris Marketplace. Te daremos un breve recorrido por la plataforma Seller Center para ayudarte a conocer cada una de sus funcionalidades.',
    },
  ]),
  ...getEpvSteps([
    {
      id: stepId[0],
      attachTo: { element: `.${Step1.styledComponentId}`, on: 'left' },
      title: 'Paso a paso para convertirte en seller',
      text: 'A través de las notificaciones te mantendremos informado sobre todas las novedades del Seller Center.',
    },
    {
      id: stepId[1],
      attachTo: { element: `.${Step2.styledComponentId}`, on: 'bottom' },
      title: 'Paso a paso para convertirte en seller',
      text: 'A través de las notificaciones te mantendremos informado sobre todas las novedades del Seller Center.',
    },
    {
      id: stepId[2],
      attachTo: { element: `.${Step3.styledComponentId}`, on: 'top' },
      title: 'Paso a paso para convertirte en seller',
      text: 'A través de las notificaciones te mantendremos informado sobre todas las novedades del Seller Center.',
    },
    {
      id: stepId[3],
      attachTo: { element: `.${Step4.styledComponentId}`, on: 'right' },
      title: 'Paso a paso para convertirte en seller',
      text: 'A través de las notificaciones te mantendremos informado sobre todas las novedades del Seller Center.',
    },
  ]),
]
