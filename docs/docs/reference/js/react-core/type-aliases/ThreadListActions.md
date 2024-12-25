```ts
type ThreadListActions = {
  deleteThread: (threadId: string) => void;
  load: () => void;
  switchToNew: () => void;
  updateThread: (thread: Thread) => void;
};
```

Actions available for managing the thread list

## Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`deleteThread`

</td>
<td>

(`threadId`: `string`) => `void`

</td>
<td>

[packages/react-core/src/types.ts:81](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L81)

</td>
</tr>
<tr>
<td>

`load`

</td>
<td>

() => `void`

</td>
<td>

[packages/react-core/src/types.ts:78](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L78)

</td>
</tr>
<tr>
<td>

`switchToNew`

</td>
<td>

() => `void`

</td>
<td>

[packages/react-core/src/types.ts:79](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L79)

</td>
</tr>
<tr>
<td>

`updateThread`

</td>
<td>

(`thread`: [`Thread`](Thread.md)) => `void`

</td>
<td>

[packages/react-core/src/types.ts:80](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L80)

</td>
</tr>
</tbody>
</table>

## Defined in

[packages/react-core/src/types.ts:77](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L77)
