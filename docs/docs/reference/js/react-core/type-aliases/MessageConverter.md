```ts
type MessageConverter<T> = (message: T) => Message;
```

Function type for converting between message types

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

The source message type

</td>
</tr>
</tbody>
</table>

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`message`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

## Returns

[`Message`](Message.md)

## Defined in

[packages/react-core/src/types.ts:18](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L18)
