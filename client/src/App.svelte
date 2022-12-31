<script lang="ts">
  import { onMount } from 'svelte'
  import CheckBoxList from './components/CheckBoxList.svelte'
  import ExtInput from './components/ExtInput.svelte'
  import ExtView from './components/ExtView.svelte'
  import Toasts from './components/Toasts.svelte'
  import { Row, Col } from 'sveltestrap'
  import { getExtList } from './lib/api/extApi'
  import { socket } from './store/socket'
  import { addToast } from './store/toastStore'

  // on socket connect
  $socket.on('connect', () => {
    if ($socket.connected) {
      // toast
      addToast({
        type: 'info',
        isOpen: true,
        timeout: 5000,
        message: `소켓 서버에 연결되었습니다.`,
      })
    } else {
      // toast
      addToast({
        type: 'danger',
        isOpen: true,
        timeout: 5000,
        message: `소켓 서버에 연결할 수 없습니다.`,
      })
    }
  })

  // on 'updateView' event
  $socket.on('updateView', () => {
    // api call
    getExtList()

    // toast
    addToast({
      type: 'info',
      isOpen: true,
      timeout: 5000,
      message: `실시간 업데이트된 데이터를 불러왔습니다.`,
    })
  })

  // set ext limit
  let extLimit = 200

  // fetch ext list
  onMount(() => {
    // api call
    getExtList()
  })
</script>

<main>
  <Row>
    <Col lg="12" xl={{ size: 8, offset: 2 }}>
      <Row>
        <Col md="3" class="text-start">
          <h3>고정 확장자</h3>
        </Col>
        <Col md="9">
          <CheckBoxList />
        </Col>
      </Row>
      <Row class="mt-4">
        <Col md="3" class="text-start">
          <h3>커스텀 확장자</h3>
        </Col>
        <Col md="9">
          <ExtInput extLimit={extLimit} />
          <ExtView extLimit={extLimit} />
        </Col>
      </Row>
    </Col>
  </Row>
  <Toasts />
</main>
