package com.example.datacenter.controller;
import java.util.Date;
import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Salesorder;
import com.example.datacenter.model.domain.request.SalesorderRequest;
import com.example.datacenter.service.SalesorderService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author Hongsen
 * @create 2022-04-29 16:17
 */
@RestController
@RequestMapping("/salesorder")
public class SalesorderController {
    @Resource
    private SalesorderService salesorderService;

    /**
     * add, update, search, delete
     */
    @PostMapping("/add")
    public String addSalesorder(@RequestBody SalesorderRequest request) {
        Salesorder salesorder = new Salesorder();
        salesorder.setSalesOrderID(request.getSalesOrderID());
        salesorder.setCheeseWheelID(request.getCheeseWheelID());
        salesorder.setBuyerName(request.getBuyerName());
        salesorder.setTime(request.getTime());
        salesorder.setWeight(request.getWeight());
        salesorder.setCreateTime(new Date());
        salesorder.setUpdateTime(new Date());
        salesorder.setIsDelete(0);

        salesorderService.save(salesorder);
        return salesorder.getSalesOrderID();

    }

    @PostMapping("/update")
    public String updateSalesorder(@RequestBody SalesorderRequest request) {
        String salesOrderID = request.getSalesOrderID();

        Salesorder salesorder = salesorderService.getById(salesOrderID);
        salesorder.setCheeseWheelID(request.getCheeseWheelID());
        salesorder.setBuyerName(request.getBuyerName());
        salesorder.setTime(request.getTime());
        salesorder.setWeight(request.getWeight());
        salesorder.setUpdateTime(new Date());

        salesorderService.saveOrUpdate(salesorder);
        return salesorder.getSalesOrderID();
    }

    @GetMapping("/search")
    public List<Salesorder> searchSalesorder(String id, HttpServletRequest request) {
        QueryWrapper<Salesorder> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("SalesOrderID", id);
        }
        return salesorderService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteSalesorder(@RequestBody SalesorderRequest request) {
        Salesorder salesorder = new Salesorder();
        salesorder.setSalesOrderID(request.getSalesOrderID());
        salesorderService.removeById(salesorder);
    }
}
