package com.restaurante.backend.controller;

import com.restaurante.backend.model.Produto;
import com.restaurante.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @PostMapping
    public ResponseEntity<Produto> criarProduto(@RequestBody Produto produto) {

        Produto produtoSalvo = produtoRepository.save(produto);

        return new ResponseEntity<>(produtoSalvo, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listarTodosOsProdutos() {
        List<Produto> produtos = produtoRepository.findAll();

        return ResponseEntity.ok(produtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarProdutoPorId(@PathVariable UUID id) {

        Optional<Produto> produto = produtoRepository.findById(id);

        if (produto.isPresent()) {
            return ResponseEntity.ok(produto.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizarProduto(
            @PathVariable UUID id,
            @RequestBody Produto produto) {

        return produtoRepository.findById(id)
            .map(produtoExistente -> {
                produtoExistente.setNome(produto.getNome());
                produtoExistente.setDescricao(produto.getDescricao());
                produtoExistente.setPreco(produto.getPreco());
                produtoExistente.setDisponivel(produto.isDisponivel());

                Produto produtoAtualizado = produtoRepository.save(produtoExistente);
                return ResponseEntity.ok(produtoAtualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarProduto(@PathVariable UUID id) {
        if (!produtoRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        produtoRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}