<script lang="ts">
  import { onMount } from 'svelte'
  import { Row, Col } from 'sveltestrap'
  import CheckBoxList from './components/CheckBoxList.svelte'
  import ExtInput from './components/ExtInput.svelte'
  import ExtView from './components/ExtView.svelte'
  import { getExtList } from './lib/api/extApi'

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
    <Col sm="12" md={{ size: 6, offset: 3 }}>
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
</main>
