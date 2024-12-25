```ts
type ThreadManager<T> = ThreadState<T> & ThreadActions<T>;
```

Combines thread state and actions

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

[`Message`](Message.md)

</td>
<td>

The message type used in the thread

</td>
</tr>
</tbody>
</table>

## Defined in

[packages/react-core/src/types.ts:63](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L63)
