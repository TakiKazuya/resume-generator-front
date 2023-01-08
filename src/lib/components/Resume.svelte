{#if $authStore.isLoggedIn}
  <div id="capture">
    <Table style="width: 100%;" alien="center" bordered>
      <thead>
        <tr class="table-primary">
          <td colspan="4" class="text-center">スキルシート</td>
        </tr>
        <tr>
          <td><Label>氏名</Label></td>
          <td><Input plaintext value={$gitHubUserStore.name}/></td>
          <td><Label>性別</Label></td>
          <td>
            <Input type="select">
              <option>男性</option>
              <option>女性</option>
            </Input>
          </td>
        </tr>
      </thead>
    </Table>

    <Table style="width: 100%;" alien="center" bordered>
      <tbody>
        <tr>
          <td style="writing-mode: tb-rl; width: 3%" class="table-primary"><Label>備考</Label></td>
          <td>
            <Input type="textarea"/>
          </td>
        </tr>
      </tbody>
    </Table>

    <Table style="width: 100%;" alien="center" bordered striped>
      <thead class="table-primary">
        <tr>
          <td rowspan="2"></td>
          <td rowspan="2">プロジェクト名</td>
          <td rowspan="2">プロジェクト詳細</td>
          <td rowspan="2">言語</td>
          <td colspan="11">担当工程</td>
        </tr>
        <tr>
          <td style="writing-mode: tb-rl">要件定義</td>
          <td style="writing-mode: tb-rl">基本設計</td>
          <td style="writing-mode: tb-rl">詳細設計</td>
          <td style="writing-mode: tb-rl">製造</td>
          <td style="writing-mode: tb-rl">テスト</td>
          <td style="writing-mode: tb-rl">運用・保守</td>
          <td style="writing-mode: tb-rl">構築</td>
          <td style="writing-mode: tb-rl">監視</td>
          <td style="writing-mode: tb-rl">障害対応</td>
          <td style="writing-mode: tb-rl">補助</td>
          <td style="writing-mode: tb-rl">その他</td>
        </tr>
      </thead>
      <tbody>
      {#each $gitHubRepositoriesStore as repository, index}
        <tr draggable="true">
          <td class="table-primary">{index + 1}</td>
          <td><Input plaintext value={repository.name}/></td>
          <td><Input plaintext value={repository.description}/></td>
          <td><Input plaintext value={repository.language}/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
          <td><Input type="checkbox"/></td>
        </tr>
      {/each}
      </tbody>
    </Table>
  </div>
{/if}

<script>
  import authStore from "../stores/authStore";
  import {gitHubUserStore} from "../stores/gitHub/userStore"
  import {gitHubRepositoriesStore} from "../stores/gitHub/repositoriesStore"
  import { Table, Label, Input } from 'sveltestrap';
</script>
