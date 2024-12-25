```ts
type CreateMessage = Omit<Message, "id"> & {
  id: Message["id"];
};
```

Represents a message being created, with an optional ID

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

`id`?

</td>
<td>

[`Message`](Message.md)\[`"id"`\]

</td>
<td>

[packages/react-core/src/types.ts:11](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L11)

</td>
</tr>
</tbody>
</table>

## Defined in

[packages/react-core/src/types.ts:10](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L10)
