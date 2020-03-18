const Login = () => import('../components/views/Login.vue')
const Home = () => import('../components/views/Home.vue')
// const Ihome = () => import('../components/views/iview1.vue')
const Desk = () => import('../components/views/Desk2.vue')
// const DaiBan = () => import('../components/views/daiban.vue')
const Edit = () => import('../components/views/Edit.vue')
const Interview = () => import('../components/views/Interview')
const Update = () => import('../components/views/Update')
const Wait = () => import('../components/views/Wait')
const Allmessage = () => import('../components/views/Allmessage')
const MessageSend = () => import('../components/views/MessageSend')
const Send = () => import('../components/views/Send')
const Duplicateremoval = () => import('../components/views/Duplicateremoval')
const Vertify = ()=> import('../components/views/Vertify')
const Library = ()=> import('../components/views/Library')
const LibraryDetail = ()=> import('../components/views/LibraryDetail')
const NewsDetail = ()=> import('../components/views/NewsDetail')
const NewsPreview = ()=> import('../components/views/NewsPreview')
const PubInformation = ()=> import('../components/views/PubInformation')
const WasSend = ()=> import('../components/views/WasSend')
const PublicityDetails = ()=> import('../components/views/PublicityDetails')
const PublicResult = ()=> import('../components/views/PublicResult')
const PublicPreview = ()=> import('../components/views/PublicPreview')
const PublicManagement = ()=> import('../components/views/PublicManagement')
const InforEditPhotext = ()=> import('../components/views/InforEditPhotext')
const InformationEditingAtlas = ()=> import('../components/views/InformationEditingAtlas')
export default [
  {
    path: '/login',
    component: Login
  },
  {
  path: '/home',
  component: Home,
  children: [
    {
      path: '/home/desk2',
      component: Desk
    },
    {
      path: '/home/edit',
      component: Edit
    },
    {
      path: '/home/interview',
      component: Interview
    },
    {
      path: '/home/update',
      component: Update
    },
    {
      path: '/home/wait',
      component: Wait
    },
    {
      path: '/home/allmessage',
      component: Allmessage
    },
    {
      path: '/home/ms',
      component: MessageSend
    },
    {
      path: '/home/send',
      component: Send
    },
    {
      path: '/home/duplicateremoval',
      component: Duplicateremoval
    },
    {
      path: '/home/vertify',
      component: Vertify
    },
    {
      path: '/home/library',
      component: Library
    },
    {
      path: '/home/libdetail',
      component: LibraryDetail
    },
    {
      path: '/home/newsdetail',
      component: NewsDetail
    },
    {
      path: '/home/newspreview',
      component: NewsPreview
    },
    {
      path: '/home/pubinformation',
      component: PubInformation
    },
    {
      path: '/home/wassend',
      component: WasSend
    },
    {
      path: '/home/publicdetails',
      component: PublicityDetails
    },
    {
      path: '/home/publicresult',
      component: PublicResult
    },
    {
      path: '/home/publicpreview',
      component: PublicPreview
    },
    {
      path: '/home/publicmanagement',
      component: PublicManagement
    },
    {
      path: '/home/inforeditphotext',
      component: InforEditPhotext
    },
    {
      path: '/home/inforeditatlas',
      component: InformationEditingAtlas
    },
    {
      path: '/home',
      redirect: '/home/desk2'
    }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]